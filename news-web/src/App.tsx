
import React from 'react';
import './App.css';
import './components/sass/styles.css';

import {Route, Routes} from "react-router-dom";
import NewDetail from "./components/pages/NewDetail";


function App() {
  return (

//       <Routes>
//           <Route path="/new/:id" element={<NewDetail />} />
//       </Routes>

    <div className="App">

      <Header/>
      <WebRouter/>
      <Footer/>

    </div>

  );
}

export default App;