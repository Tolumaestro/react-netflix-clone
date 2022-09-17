import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { auth } from "../firebase";
import { selectUser } from "../redux/userSlice";

const ProfilePage = () => {
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  return (
    <div className=" text-white min-h-screen">
      <Nav />
      <div className="flex flex-col w-8/12 md:w-6/12 mx-auto pt-[20%] md:pt-[8%] max-w-[800px] pb-[50px]">
        <h1 className="text-[40px] md:text-[60px]  font-normal border-b border-b-[#282c2d] mb-[20px]">
          Edit Profile
        </h1>
        <div className="flex flex-col md:flex-row">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Avatar"
            className="h-[100px] w-fit mb-[10px]"
          />
          <div className="md:ml-[25px] flex-1">
            <h2 className="bg-gray-400 p-[15px] text-[15px] pl-[20px]">
              {user?.email}
            </h2>
            <div>
              <h3 className="border-b border-b-[#282c2d] py-[10px] text-xl font-semibold">
                Plans (Current Plan: Premium)
              </h3>
              <p className="my-[10px]">Renewal date: 19/09/2022</p>

              <div className="w-full">
                <ul className="my-[20px] px-[10px] space-y-8">
                  <li className="flex justify-between items-center hover:opacity-50">
                    <div className="font-semibold">
                      <h4>Netflix Standard</h4>
                      <p>1080p</p>
                    </div>
                    <button className="py-[10px] px-[20px] text-[1rem] text-white bg-[#e50914] font-semibold">
                      Subscribe
                    </button>
                  </li>
                  <li className="flex justify-between items-center hover:opacity-50">
                    <div className="font-semibold">
                      <h4>Netflix Basic</h4>
                      <p>480p</p>
                    </div>
                    <button className="py-[10px] px-[20px] text-[1rem] text-white bg-[#e50914] font-semibold">
                      Subscribe
                    </button>
                  </li>
                  <li className="flex justify-between items-center hover:opacity-50">
                    <div className="font-semibold">
                      <h4>Netflix Premium</h4>
                      <p>4k + 1080p</p>
                    </div>
                    <button className="py-[10px] px-[20px] text-[1rem] text-white bg-gray-400 font-semibold">
                      Current Package
                    </button>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
                type="button"
                className="py-[10px] px-[20px] text-[1rem] mt-[5%] w-full text-white bg-[#e50914] font-semibold"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
