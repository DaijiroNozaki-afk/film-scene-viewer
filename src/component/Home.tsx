import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

// ラジオボタン設定
interface Radio {
    label: string
    value: number
}

const Home: FC<{ updateSelected: (e: number) => void, selected: number }>  = ({ updateSelected, selected }) => {
    console.log(selected)  // 60
    // ラジオボタン切り替えイベント
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => updateSelected(
        Number(event.target.value) // Radio ボタンのvalue はどうやらstring 型なので、number 型に変換している
    )
    // ラジオボタン
    const radioButtons: Radio[] = [
        {
            label: "15s",
            value: 15
        },
        {
            label: "30s",
            value: 30
        },
        {
            label: "60s",
            value: 60
        },
        {
            label: "120s",
            value: 120
        },
        {
            label: "300s",
            value: 300
        }
    ]
    // スライドショーを開始する
    const navigate = useNavigate()
    const startViewer = () => {
        navigate('/slideshow')
    }
    return (
    <div className='container form-check'>
        <h3 className="form-arega">ビューワの設定</h3>
        <div className="select-time">
            <p className="select-title">間隔</p>
            {radioButtons.map(radio => {
                return (
                    <div className="col-4" key={radio.label}>
                        {/* checked 属性に式を定義する */}
                        <input type="radio" name="sweets" className="form-check-input"
                            id={radio.label}
                            value={radio.value} checked={radio.value === selected} onChange={changeValue} />
                        <label className='form-check-label' htmlFor={radio.label}>
                            <span className="fs-6">{radio.label}</span>
                        </label>
                    </div>
                )
            })}
        </div>
        <div>{selected}が選択されました。</div>
        <div className="viwer-message">ビューワが終了しました。お疲れさまでした。</div>
        <button onClick={startViewer}>開始</button>
    </div>
    )
}

export default Home