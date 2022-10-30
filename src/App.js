import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./Components/Users";
import Details from "./Components/Details";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/users/:id" element={<Details />} />
            </Routes>
        </div>
    );
};

export default App;
