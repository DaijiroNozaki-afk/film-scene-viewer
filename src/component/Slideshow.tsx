import React, { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Slideshow.css'

const Slideshow: FC<{
  selected: number,
  setFinished: (e: boolean) => void,
}> = ({
   selected, setFinished
}) => {
    // console.log(selected);
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
  const changeImg = (e: number) => {
    let nowFile = imgDir + fileName[e]
    setViewImg(nowFile)
    // カウントダウンの数字を戻す#####
  }
  // 一定の時間で画像を切り替える
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
       setCount(c => c + 1);
       (fileNum === fileName.length - 1)? stopViewer() : fileNum ++
       changeImg(fileNum)
    }, 1000 * selected)
    return () => clearInterval(interval)
  }, [])
  // カウントダウンを表示
  const [countdown, setCountDown] = useState<number>(0)
  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
       setCountDown(c => c + 1);
       // 一秒引いて表示する#####
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  //入力フォームの表示
  //時間間隔は15秒、30秒、60秒、2分、5分のどれかが選択できる
  //スタートボタンを押すと、スライドショーが始まる
  //全ての画像を表示し終えると、入力フォームに戻る
  
  // スライドショーを終了する
  const navigate = useNavigate()
  const stopViewer = () => {
    setFinished(true)  //終了メッセージを表示させる
    navigate('/')
  }
  return (
    <div className='p-slideshow'>
      <div className="p-ss-view">
      <img src={viewImg} alt="" className="p-ss-img" />
      </div>
    </div>
  )
}

export default Slideshow