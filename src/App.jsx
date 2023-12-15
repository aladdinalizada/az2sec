// import "./i18n/i18n";
// import { useState } from "react";
// import { useTranslation } from "react-i18next";

import Header from "./layouts/header/header";
import Hero from "./pages/Hero/Hero";

function App() {
  // const { t, i18n } = useTranslation();
  // const [language, setLanguage] = useState("az");
  // const changeLanguage = (e) => {
  //   setLanguage(e.target.value);
  //   i18n.changeLanguage(e.target.value);
  // };
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
