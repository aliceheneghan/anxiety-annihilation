import { Routes, Route } from "react-router-dom";

// Pages
import Choice from '../Choice';
import ChoiceDog from '../ChoiceDog';
import ChoiceSpace from '../ChoiceSpace';

export default function ChoiceRouter() {
  return (
    <Routes>
        <Route path="/" element={<Choice />}/>
        <Route path="/choiceDog" element={<ChoiceDog />}/>
        <Route path="/choiceSpace" element={<ChoiceSpace />}/>
    </Routes>
  )
}
