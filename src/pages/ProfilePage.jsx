import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Plans from "../components/Plans";
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
            className="h-[100px] w-max mb-[10px]"
          />
          <div className="md:ml-[25px] flex-1">
            <h2 className="bg-gray-400 p-[15px] text-[15px] pl-[20px]">
              {user?.email}
            </h2>
            <div>
              <Plans />

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
