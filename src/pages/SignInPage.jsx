import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const signIn = (e) => {
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        navigate("/profile");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="relative h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/2aeb0b23-006c-4eb6-9997-51ecbbe9e16e/NG-en-20220912-popsignuptwoweeks-perspective_alpha_website_small.jpg')] bg-center bg-no-repeat bg-cover ">
      <div>
        <img
          className="fixed left-0 w-[150px] object-contain pl-5 cursor-pointer z-20"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <button
          className="absolute right-5 top-5  py-[10px] px-[20px] text-[1rem] text-white font-semibold bg-[#e50914] cursor-pointer z-20"
          type="button"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign In
        </button>

        <div
          className="w-full h-screen z-10 bg-black opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />
      </div>

      <div className="z-10 w-full text-white p-5 absolute top-[20%] left-0 right-0 mx-auto text-center">
        <div className="max-w-[400px] p-[70px] mx-auto bg-black opacity-[85]">
          <form className="flex flex-col">
            <h1 className="text-2xl mb-[25px] text-left">Sign In</h1>
            <input
              ref={emailRef}
              className="input"
              type="email"
              placeholder="Email"
            />
            <input
              ref={passwordRef}
              className="input"
              type="password"
              placeholder="Password"
            />
            <button
              className="py-4 px-5 text-[1rem] text-white rounded-[5px] bg-[#e50914] font-semibold cursor-pointer w-full "
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </button>
            <h4 className="text-left mt-[30px] text-gray-400">
              New to Netflix?{" "}
              <span
                className="font-bold cursor-pointer text-white hover:underline"
                onClick={() => navigate("/signup")}
              >
                Sign up now.
              </span>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
