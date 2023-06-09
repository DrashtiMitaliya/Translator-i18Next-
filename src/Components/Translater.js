import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const Translator = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const { t } = useTranslation("translation", {
    defaultValue: "Default Value",
    lng: selectedLanguage,
  });

  const [text, setText] = useState("good");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

//   const translateText = () => {
//     if (selectedLanguage) {
//       setTranslatedText(i18n.t(selectedLanguage, { defaultValue: text }));
//     }
//   };

//   const handleInputChange = (event) => {
//     setText(event.target.value);
//   };

  return (
    <div>
      <h2>Translator</h2>
      <form action="" className="w-25 m-auto p-4">
       
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={text}
        //   onChange={handleInputChange}
        />
      </form>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
      Select Your Language 
        </button>

        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button
            className="dropdown-item"
            type="button"
            onClick={() => handleLanguageChange("hi")}
          >
            {t("hindi")}
          </button>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => handleLanguageChange("fr")}
          >
            {t("french")}
          </button>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => handleLanguageChange("gu")}
          >
            {t("gujarati")}
          </button>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => handleLanguageChange("de")}
          >
            {t("german")}
          </button>
        </div>
      </div>

      <div>
        <div className="p-4 w-25 m-auto">{t("good")}</div>
      </div>
    </div>
  );
};
export default Translator;
