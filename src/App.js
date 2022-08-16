import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Choice from "./pages/Choice";
import ListenAndLook from "./pages/ListenAndLook";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Choice" element={<Choice />}/>
        <Route path="/ListenAndLook" element={<ListenAndLook />}/>
        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
