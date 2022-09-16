import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-[#111]">
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
          <Route path="/test" element={<h1>Hello </h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
