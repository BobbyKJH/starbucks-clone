import { Routes, Route } from "react-router-dom";
import Coffee from "./pages/Coffee";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
