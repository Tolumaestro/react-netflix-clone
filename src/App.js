import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  const user = 0;
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
