// CSS
import "./App.css";
// Pages
import Home from "./pages/Home";

function App() {
  return (
    //BEM
    <div className="App">
      <h1>Hello World</h1>
      {/* Home */}
      <Home />
      {/* Search Page (result page) */}
    </div>
  );
}

export default App;
