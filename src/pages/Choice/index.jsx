import React from "react";

// Components
import BorderBubble from "../../components/BorderBubble";

// Components
import ChoiceButton from "../../components/ChoiceButton";

export default function Choice() {
  return (
    <div className="choice-cont flx cnt-cnt">
      <ChoiceButton choice="Dog" />
      <ChoiceButton choice="Space" />
      <BorderBubble />
    </div>
  );
}
