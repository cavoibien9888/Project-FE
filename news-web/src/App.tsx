import React from 'react';
import './App.css';

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