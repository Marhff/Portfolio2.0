import React from "react";
import i18next from "i18next";

function LangSwitch() {
  return (
    <div className="langSwitcher">
      <select
        value={i18next.language}
        onChange={(e) => i18next.changeLanguage(e.target.value)}
      >
        <option value="da">Rock</option>
        <option value="de">Metal</option>
        <option value="en">Lo-Fi</option>
        <option value="es">BR</option>
      </select>
    </div>
  );
}

export default LangSwitch;
