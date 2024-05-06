import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
// Page
import HomePage from "./page/HomePage/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
