import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinListing from "./containers/CoinListing";
import CoinDetail from "./containers/CoinDetail";
function App() {
  return (
    <div className="App bg-secondary" style={{ height: "100%" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<CoinListing />} />
          <Route path="/coin/:coinId" element={<CoinDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
