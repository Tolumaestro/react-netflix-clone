import React from "react";

const SignIn = () => {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-[400px] p-[70px] mx-auto bg-black opacity-[85]">
      <form className="flex flex-col">
        <h1 className="text-2xl mb-[25px] text-left">Sign In</h1>
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <button
          className="py-4 px-5 text-[1rem] text-white rounded-[5px] bg-[#e50914] font-semibold cursor-pointer w-full "
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
        <h4 className="text-left mt-[30px] text-gray-400">
          New to Netflix?{" "}
          <span
            className="font-bold cursor-pointer text-white hover:underline"
            onClick={register}
          >
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
