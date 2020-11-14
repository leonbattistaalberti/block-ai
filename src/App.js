import "./App.css";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <SignUp />
      </div>
    </BrowserRouter>
  );
}

export default App;
