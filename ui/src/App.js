import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Post from "./components/Post";
import RegisterPage from "./pages/RegisterLogin";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import { UserContextProvider } from "./context/userContext";
import CreatePost from "./pages/CreatePost";
function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/create" element={<CreatePost/>} />
      </Route>
    </Routes>
    </UserContextProvider>
    
  );
}

export default App;
