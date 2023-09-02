import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Details from "./screens/Details";
import AddNew from "./screens/AddNew";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/add" element={<AddNew/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
