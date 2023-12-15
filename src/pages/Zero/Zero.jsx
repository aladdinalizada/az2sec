import "../../i18n/i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Zero = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(localStorage.getItem("lang", "az"));
  const changeLanguage = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="w-full h-9 flex justify-center">
      <select onChange={changeLanguage} className="border-none">
        <option value="az">AZE</option>
        <option value="en">ENG</option>
      </select>
    </div>
  );
};

export default Zero;
