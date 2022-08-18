import { Routes, Route } from "react-router-dom";

// Pages
import ChoiceDog from '../ChoiceDog';
import ChoiceSpace from '../ChoiceSpace';

// Components
import ChoiceButton from "../../components/ChoiceButton";
import BorderBubble from "../../components/BorderBubble";

export default function Choice({ handleNav }) {
  return (
    <>
      <Routes>
        <Route path="/choice" element={<Choice handleNav={handleNav} />} />
        <Route path="/choiceDog" element={<ChoiceDog />} />
        <Route path="/choiceSpace" element={<ChoiceSpace />} />
      </Routes>
      <div className="choice-cont flx cnt-cnt">
        <ChoiceButton choice="Dog" handleNav={handleNav} />
        <ChoiceButton choice="Space" handleNav={handleNav} />
        <BorderBubble />
      </div>
    </>
  );
}
