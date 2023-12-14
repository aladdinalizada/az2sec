import "./App.css";
import "./i18n/i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import loading
import Loading from "./components/loading/Loading";
function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("az");
  const changeLanguage = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <div className="App">
        <div>
          <header>
            <select value={language} onChange={changeLanguage}>
              <option value="az">Azerbaijan</option>
              <option value="en">English</option>
            </select>
          </header>

          <main>
            <h1>{t("Title")}</h1>
            <p>{t("desc")}</p>
            <Loading />
          </main>
          <footer>
            <p>
              {t("Contact")} :
              <a href="mailto:aztusec@gmail.com">aztusec@gmail.com</a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
