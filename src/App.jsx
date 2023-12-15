import { Helmet } from "react-helmet";
import Header from "./layouts/header/header";
import Hero from "./pages/Hero/Hero";
import Zero from "./pages/Zero/Zero";

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
      </div>
    </>
  );
}

export default App;
