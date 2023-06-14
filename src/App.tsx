import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // ファイル名の配列を格納する
  const imgDir = "./images/"
  let fileName = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg',
    '08.jpg',
    '09.jpg',
    '10.jpg',
  ]
  const [imgName, setImgName] = useState()
  // 現在の画像ファイル名
  const [viewImg, setViewImg] = useState(imgDir + fileName[0])
  // console.log(imgName[0])
  // 画像を切り替える
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
       setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // const imgChange = () => {
  //   count++

  //   //カウントが最大になれば配列を初期値に戻すため「0」を指定する
  //   if (count == imgName.length) count = 0
    
  //   //画像切り替え
  //   setViewImg(imgName[count])
  //   // <img src='./images/{imgNum[count]}' alt="" className="src" />
  //   // 1秒ごとに実施
  //   setTimeout(imgChange, 1000)
  // }
  return (
    <div className="App">First view.
      <div className="imageClass">
      <img src={viewImg} alt="" className="src" />
      {count}
      </div>
    </div>
  );
}

export default App;
