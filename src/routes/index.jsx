import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/Features";
import News from "../components/News";
import PlansAndMeasures from "../components/PlansAndMeasures";
import Seminars from "../components/Seminars";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import NotFound from "../pages/NotFound";
import Newspage from "../pages/News";
const Routing = () => {
  const Home = () => {
    return (
      <>
        <Hero />
        <Features />
        <News />
        <PlansAndMeasures />
        <Seminars />
      </>
    );
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/news" element={<Newspage />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
