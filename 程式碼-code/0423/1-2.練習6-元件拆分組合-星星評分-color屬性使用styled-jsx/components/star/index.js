import { useState } from 'react'
// 導入.module.css檔案
import styles from './star.module.css'

export default function Star({
  initRating = 0, //初始的評分
  maxCount = 5, // 最多可評的分數(幾個星星圖)
  onRatingChange = () => {}, // 點按後回傳評分的函式
  color = 'red',
}) {
  // 記錄點按時的評分，一開始是0分代表沒有評分
  const [rating, setRating] = useState(initRating)

  // 滑鼠游標懸停(hover)，一開始是0分代表沒有評分
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <>
      <div>
        {/* 
          這裡使用簡易建立5個陣列1...N的語法，可以參考:
          https://github.com/orgs/mfee-react/discussions/50 
        */}
        {Array(maxCount)
          .fill(1)
          .map((v, i) => {
            // 每個星星圖示按鈕的分數，相當於索引+1
            const score = i + 1

            return (
              <button
                // 從初次渲染到應用程式執行過程中，都不會有新增、刪除、修改、排序…的情況
                // 才能使用index(索引)當key
                key={i}
                className={styles['star-btn']}
                onClick={() => {
                  // 點按後設定分數
                  setRating(score)
                  // 設定評分傳回
                  onRatingChange(score)
                }}
                onMouseEnter={() => {
                  // 滑鼠游標進入設定分數
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  // 滑鼠游標離開設定回初始0分
                  setHoverRating(0)
                }}
              >
                <span
                  // 判斷星星是否要點亮。如果這個星星的分數(score)小於等於目前的評分(rating)，則套用亮起樣式
                  // 改為style屬性作動態傳入color套用
                  // style={{
                  //   color:
                  //     score <= rating || score <= hoverRating ? color : 'gray',
                  // }}
                  // 改用styled-jsx語法在下面套入動態傳入color
                  className={
                    score <= rating || score <= hoverRating ? 'on' : 'off'
                  }
                >
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
      {/* 改用styled-jsx語法在下面套入動態傳入color */}
      <style jsx>
        {`
          .on {
            color: ${color};
          }

          .off {
            color: 'gray';
          }
        `}
      </style>
    </>
  )
}
