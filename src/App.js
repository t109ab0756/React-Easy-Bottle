import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Foot from "./Foot";
import Title from "./Title";
import AboutTeam from "./AboutTeam";
import Product from "./Product";
import Shop from "./Shop";
import Login from "./Login";
import BackToTop from "./BackToTop";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Title />} />
        <Route path="/AboutTeam" element={<AboutTeam />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <BackToTop />
      <Foot />
    </div>
  );
}
