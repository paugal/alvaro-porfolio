import { useTranslation } from "react-i18next";
import React, { useState } from "react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const [showDropdown, setShowDropdown] = useState(false); // State to toggle the dropdown

  const LANGUAGES = [
    { label: "Spanish", code: "es" },
    { label: "English", code: "en" },
    { label: "Catalan", code: "ca" },
    { label: "French", code: "fr" },
  ];

  // Function to toggle the language dropdown
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Change language when clicking a language option
  const onChangeLang = (lang_code: string) => {
    i18n.changeLanguage(lang_code); // Change the language
    setShowDropdown(false); // Close the dropdown after selection
  };

  return (
    <div className="language-container">
      <span
        className="material-symbols-outlined"
        onClick={toggleDropdown}
        onMouseEnter={() => setShowDropdown(true)}
        style={{ cursor: "pointer" }}
      >
        translate
      </span>
      {showDropdown && (
        <div
          className="absolute bg-bg-web m-1 px-2 rounded-lg"
          onMouseLeave={() => setShowDropdown(false)}
        >
          {LANGUAGES.map(({ code, label }) => (
            <div
              key={code}
              className="cursor-pointer my-2 rounded-lg text-center p-2  hover:bg-bg-ui hover:text-text-inv "
              onClick={() => onChangeLang(code)}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
