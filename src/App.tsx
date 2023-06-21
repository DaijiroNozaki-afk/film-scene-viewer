import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header'
import Home from './component/Home'
import Slideshow from './component/Slideshow'
import React, { useState } from 'react';

function App() {
  // 選択中のラジオボタンvalue
  const [selected, setSelected] = useState<number>(60)
  const updateSelected = (e: number): void => setSelected(e) //プロップスに送るための関数
  // ビューワ終了のブール値
  const [finished, setFinished] = useState<boolean>(false)
  return (
    <div className="App">
    <Router basename='/film-scene-viewer'>
      <Header />
      <Routes>
        <Route path="/" element={
          <Home 
            updateSelected = {updateSelected}
            selected = {selected}
            finished = {finished}
          />} />
        <Route path="/slideshow" element={
          <Slideshow
            selected = {selected} 
            setFinished = {setFinished}
          />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
