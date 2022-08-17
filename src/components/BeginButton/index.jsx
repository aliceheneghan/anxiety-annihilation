import React from "react";

// Components
import BorderBubble from "../../components/BorderBubble";


export default function BeginButton({ handleNav }) {
  return (
    <div className="title-container flx column cnt-cnt">
      <button
        className="title-font xxl text-center title"
        onClick={() => handleNav("/choice")}
      >
        Anxiety Annihilation
      </button>
      <BorderBubble  />
    </div>
  );
}
