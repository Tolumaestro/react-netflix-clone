import React, { useRef } from "react";
import { auth } from "../firebase";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((error) => alert(error.message));
  };

  return (
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
