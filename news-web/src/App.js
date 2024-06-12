import React from 'react';
import './App.css';

import WebRouter from "./components/router/WebRouter";
import Header from "./components/pages/Header/Header";
import Footer from "./components/pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <WebRouter/>
      <Footer/>
    </div>
  );
}

export default App;