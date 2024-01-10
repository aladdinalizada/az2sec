import { Helmet } from "react-helmet";
import Zero from "./components/Zero";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Routing from "./routes";
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
        <Routing />
        <Footer />
      </div>
    </>
  );
}

export default App;
