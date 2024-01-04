import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Zero from "./pages/Zero";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Routing from "./routes";

function App() {
  localStorage.setItem("lang", "az");
  // accses location
  const [location, setLocation] = useState("");
  useEffect(() => {
    const getLocation = async () => {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setLocation(data);
    };
    getLocation();
  }, [location]);
  localStorage.setItem("location", JSON.stringify(location));
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
        <Routing />
        <Footer />
      </div>
    </>
  );
}

export default App;
