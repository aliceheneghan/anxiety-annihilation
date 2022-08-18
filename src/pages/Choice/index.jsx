// Components
import ChoiceButton from "../../components/ChoiceButton";
import BorderBubble from "../../components/BorderBubble";

export default function Choice({ handleNav }) {
  return (
    <>
      <div className="choice-cont flx cnt-cnt">
        <ChoiceButton choice="dog" handleNav={handleNav} />
        <ChoiceButton choice="Space" handleNav={handleNav} />
        <BorderBubble />
      </div>
    </>
  );
}
