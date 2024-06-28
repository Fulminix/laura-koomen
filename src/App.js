import './App.css';
import Home from "./pages/Home.js"
import Photography from "./pages/Photography.js"
import  {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename='/laura-koomen'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/Photography" exact element={<Photography />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
