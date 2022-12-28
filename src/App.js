import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Parse from "./components/parse";
import AgencyDetail from "./components/AgencyDetail";

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/parse" element={<Parse />} />
                  <Route path="/agence/:id" element={<AgencyDetail />}  />
                  /* Error 404 */
                  <Route path="*" element={<NotFound />}  />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
