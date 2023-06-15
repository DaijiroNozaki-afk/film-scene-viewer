import React, { useState } from 'react'

// ラジオボタン設定
interface Radio {
    label: string
    value: string
}

const Home = () => {
    // 選択中のラジオボタンvalue
    const [selected, setSelected] = useState<string>("60")
    // ラジオボタン切り替えイベント
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => setSelected(
        event.target.value
    )
    // ラジオボタン
    const radioButtons: Radio[] = [
        {
            label: "15s",
            value: "15"
        },
        {
            label: "30s",
            value: "30"
        },
        {
            label: "60s",
            value: "60"
        },
        {
            label: "120s",
            value: "120"
        },
        {
            label: "300s",
            value: "300"
        }
    ]
    return (
    <div className='container form-check'>
        <div className="row">
            {radioButtons.map(radio => {
                return (
                    <div className="col-4">
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
    </div>
    )
}

export default Home