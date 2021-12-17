import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App" style={{ display: 'flex', height: '67vh', justifyContent: 'center', alignItems: 'center' }}>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
