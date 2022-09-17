import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

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

      <div className="z-10 w-full text-white p-5 absolute top-[30%] left-0 right-0 mx-auto text-center">
        <>
          <h1 className="text-[3.125rem] mb-5">
            Unlimited films, TV programmes and more.
          </h1>
          <h2 className="text-[2rem] font-normal mb-[30px]">
            Watch anywhere, Cancel at any time
          </h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="m-[20px]">
            <form action="" className="h-[30px]">
              <input
                className="p-[10px] outline-none h-full w-[30%] border-none max-w-[600px] text-black"
                type="email"
                placeholder="Email Adddress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="uppercase px-[20px] h-full text-[1rem] bg-[#e50914]"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Get Started
              </button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default LoginPage;
