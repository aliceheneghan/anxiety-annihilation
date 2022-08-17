import React from "react";

export default function BeginButton({ handleNav }) {
  return (
    <div className="title-container flx cnt-cnt">
      <button
        className="title-font xxl text-center title"
        onClick={() => handleNav("/choice")}
      >
        Anxiety Annihilation
      </button>
    </div>
  );
}
