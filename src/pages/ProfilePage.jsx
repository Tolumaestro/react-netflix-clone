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
    <div>
      <Nav />
      <div>
        <h1>Edit Profile</h1>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Avatar"
          />
          <div>
            <h2>{user?.email}</h2>
            <div>
              <button
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
                type="button"
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
