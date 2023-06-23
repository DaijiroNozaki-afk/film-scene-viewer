import React, { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Slideshow.css'

const Slideshow: FC<{
  selected: number,
  setFinished: (e: boolean) => void,
}> = ({
   selected, setFinished
}) => {
  // ファイル名の配列を格納する
  const imgDir = "./images/"
  const fileName: string[] = [
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
  let fileNum: number = 0; // 現在表示しているファイル名の配列番号
  // 現在の画像ファイル名
  const [viewImg, setViewImg] = useState<string>(imgDir + fileName[0])
  // 画像切り替えの関数
  let countNum: number = selected; // 現在のカウント数
  // 一定の時間で画像を切り替える
  const [count, setCount] = useState<number>(selected) // 残りカウント数
  let intervalNum: number = 3;
  const [intervalTime, setIntervalTime] = useState<number>(3) //インターバルタイム、初期値は3
  const changeImg = () => {
    if (intervalNum > 0) {
      intervalNum--
      setIntervalTime(intervalNum)
    } else {
      countNum--;
      if (countNum ===0) {
        // 画像を切り替える、全ての画像を表示し終えたら、ビューワを終了する
        (fileNum === fileName.length - 1)? stopViewer() : fileNum ++
        let nowFile = imgDir + fileName[fileNum]
        setViewImg(nowFile)
        // カウントダウンの数字を戻す
        countNum = selected
        // インターバル開始
        intervalNum = 3
        setIntervalTime(intervalNum)
      }
      // プログレスバーの残りカウント数を更新する
      setCount(countNum)
      // カウントダウンの数字を戻す
      setCountDown(selected)
    }
  }
  // カウントダウンを表示
  const [countdown, setCountDown] = useState<number>(selected)
  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
       setCountDown(c => c - 1);
       changeImg()
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  
  // スライドショーを終了する
  const navigate = useNavigate()
  const stopViewer = () => {
    setFinished(true)  //終了メッセージを表示させる
    navigate('/')
  }
  return (
    <>
      <div className='p-slideshow'>
        <p className='p-slideshow-interval' style={{display: `${(intervalTime === 0)? "none": "block"}`}}>{intervalTime}</p>
        <div className="p-slidemain" 
          style={{display: `${!(intervalTime === 0)? "none": "block"}`}}>
          <div className="progress-bar">
            <div
              className="progress-bar-done"
              // style={{ width: `${percent}%` }}
              style={{ width: `${count/selected*100}%` }}
            ></div>
          </div>
          {/* <p>{countdown}</p> */}
          <div className="p-ss-view">
            <img src={viewImg} alt="" className="p-ss-img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Slideshow