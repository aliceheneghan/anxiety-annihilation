import { Routes, Route, useNavigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Choice from './pages/Choice';
import ChoiceDog from './pages/ChoiceDog';
import ChoiceSpace from './pages/ChoiceSpace';

// Components
import Header from "./components/Header";

function App() {
  // navigate
  const navigate = useNavigate()

  // handlers
  const handleNav = (path) => {
        navigate(`${path}`)
    }; 

  return (
    <div className="App flx strt-cnt column">
      <header className="flx cnt-cnt">
        <Header />
      </header>
      <section className="flx cnt-cnt">
        <Routes >
          <Route path="/" element={<Home handleNav={handleNav} />} />
          <Route path="/choice/*" element={<Choice handleNav={handleNav} />} />
          <Route path="/choice/dog" element={<ChoiceDog />} />
          <Route path="/choice/space" element={<ChoiceSpace />} />
          {/* Fallback route 
            <Route
              path="*"
              element={<NotFound />}
            /> /* (import Navigate component from react router dom) <Navigate to={"/"} /> */
          }
        </Routes>
      </section>
    </div>
  );
}

export default App;
