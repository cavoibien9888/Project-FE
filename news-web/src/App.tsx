import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/sass/styles.scss';

import WebRouter from "./components/router/WebRouter";
import Header from "./components/pages/Header/Header";
import Footer from "./components/pages/Footer/Footer";
import {Route, Routes} from "react-router-dom";
// import NewDetail from "./components/pages/NewDetail";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Routes> */}
        {/* <Route path="/new/:id" element={<NewDetail />} /> */}
        <WebRouter/>
      {/* </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
