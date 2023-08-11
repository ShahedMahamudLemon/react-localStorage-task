import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<OrderPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
