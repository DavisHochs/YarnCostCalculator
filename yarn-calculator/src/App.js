import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Calculator from "./routes/Calculator";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/about" 
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/calculator" 
          element={
            <ProtectedRoute>
              <Calculator />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
