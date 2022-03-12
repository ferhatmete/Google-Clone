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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
