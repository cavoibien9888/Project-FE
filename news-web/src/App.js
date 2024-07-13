import React from 'react';
import './App.css';

import WebRouter from "./components/router/WebRouter";
import Header from "./components/pages/Header/Header";
import Footer from "./components/pages/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import NewDetail from "./components/pages/NewDetail";

function App() {
  return (
      <Routes>
          <Route path="/new/:id" element={<NewDetail />} />
      </Routes>
  );
}

export default App;