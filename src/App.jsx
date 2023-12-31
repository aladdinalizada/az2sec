import { Helmet } from "react-helmet";
import Header from "./layouts/header";
import Features from "./pages/Features";
import Hero from "./pages/Hero";
import News from "./pages/News";
import PlansAndMeasures from "./pages/PlansAndMeasures";
import Seminars from "./pages/Seminars";
import Zero from "./pages/Zero";

function App() {
  localStorage.setItem("lang", "az");
  return (
    <>
      <Helmet>
        <title>Az2sec</title>
        <meta name="description" content="Az2sec" />
        <meta name="keywords" content="Az2sec" />
        <meta name="author" content="Az2sec" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="App">
        <Zero />
        <Header />
        <Hero />
        <Features />
        <News />
        <PlansAndMeasures />
        <Seminars />
      </div>
    </>
  );
}

export default App;
