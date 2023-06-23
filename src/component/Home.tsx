import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

// ラジオボタン設定
interface Radio {
    label: string
    value: number
}

const Home: FC<{
        updateSelected: (e: number) => void,
        selected: number,
        finished: boolean
    }>  = ({
         updateSelected, selected, finished
    }) => {
    // ラジオボタン切り替えイベント
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => updateSelected(
        Number(event.target.value) // Radio ボタンのvalue はどうやらstring 型なので、number 型に変換している
    )
    // ラジオボタン
    const radioButtons: Radio[] = [
        {
            label: "15",
            value: 15
        },
        {
            label: "30",
            value: 30
        },
        {
            label: "60",
            value: 60
        },
        {
            label: "120",
            value: 120
        },
        {
            label: "300",
            value: 300
        }
    ]
    // スライドショーを開始する
    const navigate = useNavigate()
    const startViewer = () => {
        navigate('/slideshow')
    }
    //入力フォームの表示
    //時間間隔は15秒、30秒、60秒、2分、5分のどれかが選択できる
    //スタートボタンを押すと、スライドショーが始まる
    //全ての画像を表示し終えると、入力フォームに戻る
    return (
    <div className='container p-form-check'>
        <div className="p-select">
            <h3 className="p-select-h3">ビューワの設定</h3>
            <div className="p-select-time">
                <p className="p-select-title">間隔</p>
                {radioButtons.map(radio => {
                    return (
                        <div className="col-4" key={radio.label}>
                            {/* checked 属性に式を定義する */}
                            <input type="radio" name="sweets" className="p-form-check-input"
                                id={radio.label}
                                value={radio.value} checked={radio.value === selected} onChange={changeValue} />
                            <label className='p-form-check-label' htmlFor={radio.label}>
                                <span className="fs-6">{radio.label}</span>
                            </label>
                        </div>
                    )
                })}
            </div>
            <div>{selected}秒が選択されました。</div>
            <div className="viwer-message">
                { 
                    finished ? `ビューワを終了しました。お疲れさまでした。` : "フィルムビューワを開始できます。"
                }
            </div>
            <button onClick={startViewer}
                className='p-select-btn'>開始</button>
        </div>
        <p className="p-viewer-info">フィルムスタディに使うビューワです。「開始」を押すと、映画やアニメからキャプチャした10種類のシーンを順に表示していきます。描き手は選択した時間間隔内に画像を書き写して映画の効果や演出を学びます。</p>
        <p className="p-viewer-info m-tc-gray">※現在、React のみで作成されているので、同じ画像が同じ順番で表示されます。</p>
    </div>
    )
}

export default Home