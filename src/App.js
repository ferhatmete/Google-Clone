import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS
import "./App.css";
// Pages
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    //BEM
    <div className="App">
      <SearchPage />
      <Home />
    </div>
  );
}

export default App;
