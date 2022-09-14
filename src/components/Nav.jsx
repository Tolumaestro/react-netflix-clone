import React, { useEffect, useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div
      className={`fixed top-0 p-[10px] w-full h-[50px] z-[1] transition-all ease-in duration-500 ${
        show && "bg-[#111]"
      } `}
    >
      <div className="flex justify-between">
        <img
          className="fixed top-[5px] left-0 w-[80px] object-contain pl-5 cursor-pointer"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <img
          className="fixed right-5 w-[30px] h-[30px] cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
