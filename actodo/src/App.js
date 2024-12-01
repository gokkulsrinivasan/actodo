import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Landing from "./Components/Pages/Landing";

function App() {
  const [Users, Setusers] = useState([
    {
      username: "gokkul",
      password: "123",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={Users} Setusers={Setusers} />} />
        <Route path="/signup" element={<Signup users={Users} Setusers={Setusers} />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
