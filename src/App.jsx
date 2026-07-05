import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./views/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<Register />} />
        {/* Route Comodin */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
