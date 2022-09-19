import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { selectSubscription, updateSub } from "../redux/subscriptionSlice";
import { selectUser } from "../redux/userSlice";
import ClipLoader from "react-spinners/ClipLoader";

const Plans = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const subscription = useSelector(selectSubscription);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [clickedProduct, setClickedProduct] = useState(null);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();

          const priceSnap = await productDoc.ref.collection("prices").get();

          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });

        setProducts(products);
      });
  }, []);

  useEffect(() => {
    db.collection("customers")
      .doc(user?.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          dispatch(
            updateSub({
              role: subscription.data().role,
              current_period_end:
                subscription.data().current_period_end.seconds,
              current_period_start:
                subscription.data().current_period_start.seconds,
            })
          );
        });
      });
  }, [user?.uid]);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    setLoading(true);

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51LjTQqHWgx2VAc6pMDOQWYXM7jqbheDSgCjKIgepBMVRF2RT2gxeaDg46O8apOdQOWsPNVtgP58uKaMIoFXGCIDv00DNndpLwD"
        );

        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div>
      <h3 className="border-b border-b-[#282c2d] py-[10px] mb-[10px] text-xl font-semibold capitalize">
        Plans{" "}
        {subscription
          ? `(Current Plan: ${subscription?.role})`
          : "(Subscribe to view movies)"}
      </h3>
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(subscription?.current_period_end * 1000).toLocaleDateString(
            "en-GB"
          )}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div
            key={productId}
            className={`flex justify-between p-[20px] opacity-80 hover:opacity-100 `}
          >
            <div>
              <h5 className="font-semibold">{productData.name}</h5>
              <h6 className="font-semibold">{productData.description}</h6>
            </div>

            <button
              onClick={() => {
                if (!isCurrentPackage) {
                  loadCheckout(productData.prices.priceId);
                  setClickedProduct(productId);
                }
              }}
              className={`py-[10px] px-[20px] text-[1rem] bg-[#e50914] font-semibold cursor-pointer ${
                isCurrentPackage && "bg-gray-400"
              }`}
            >
              {isCurrentPackage ? (
                "Current Package"
              ) : loading && clickedProduct === productId ? (
                <ClipLoader loading={loading} size={20} />
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
