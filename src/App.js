import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Parce from "./components/parce";

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/parce" element={<Parce />} />
                  /* Error 404 */
                  <Route path="*" element={<NotFound />}  />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
