import "./App.css";
import "./Styles/IPR.css";
import "./Styles/Nav.css";
import "./Styles/RPN.css";
// import HomePage from "./Components/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "./Components/NavBars/TopNav";
import RouterPath from "./Components/Build/RouterPath";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <RouterPath />
      </div>
    </Router>
  );
}

export default App;

// POC,
// Address,
// Address2,
// State,
// Zip,
// Phone,
// Qty,
// UI,
// UP,
// Description,
// Priority,
// Department,
// Date,
// Just,
// OF,
// IJS,
// WS,
// F,
// PS,
// FFS,
// HAZ,
// AUL
