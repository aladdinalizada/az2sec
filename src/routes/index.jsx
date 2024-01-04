import { Routes, Route } from "react-router-dom";
import Hero from "../pages/Hero";
import Features from "../pages/Features";
import News from "../pages/News";
import PlansAndMeasures from "../pages/PlansAndMeasures";
import Seminars from "../pages/Seminars";
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
    </Routes>
  );
};

export default Routing;
