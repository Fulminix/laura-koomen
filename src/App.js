import './App.css';
import Home from "./pages/Home.js"
import Photography from "./pages/Photography.js"
import  {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/laura-koomen' exact element={<Home />} />
          <Route path="/laura-koomen/Photography" exact element={<Photography />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
