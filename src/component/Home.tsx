import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
        <div className="row">
            {radioButtons.map(radio => {
                return (
                    <div className="col-4" key={radio.label}>
                        {/* checked 属性に式を定義する */}
                        <input type="radio" name="sweets" className="form-check-input"
                            value={radio.value} checked={radio.value === selected} onChange={changeValue} />
                        <label className='form-check-label'>
                            <span className="fs-6">{radio.label}</span>
                        </label>
                    </div>
                )
            })}
        </div>
        <div>{selected}が選択されました。</div>
        <button onClick={startViewer}>開始</button>
    </div>
    )
}

export default Home