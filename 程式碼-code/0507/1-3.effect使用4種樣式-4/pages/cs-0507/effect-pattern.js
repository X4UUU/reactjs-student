import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function EffectPattern() {
  const [total, setTotal] = useState(0)

  // 樣式1: 每次渲染(render)之後(after)執行一次
  // 說明: 用於需要記錄，或是一些特殊專用的勾子開發時
  // 使用情況: 一般應用程式開發少用到
  useEffect(() => {
    //console.log('每次渲染(render)之後(after)執行一次')
  })

  // 樣式2: 首次渲染(render)之後(after)執行一次，之後不會再執行
  // 說明: 近似於生命周期方法中的componentDidMount(didMount)
  // 使用情況: 開發應用時最常用到的樣式。用於元件首次呈現後，與伺服器fetch/ajax獲取資料，或與第三方JS應用整合。
  useEffect(() => {
    //console.log('首次渲染(render)之後(after)執行一次，之後不會再執行')
  }, [])
  // ^^ 保持空白陣列。代表的意思是不與任何變數相依，相當於"只套用有加入第二參數的預設行為"

  // 樣式3: 首次渲染(render)之後(after)執行一次。之後當相依變數有更動之後(after)，又會執行一次
  // 說明: 近似於生命周期方法中的componentDidMount(didMount) + componentDidUpdate(didUpdate)
  // 使用情況: 開發應用時常用到的樣式。狀態更動是異步的解決方案之一。不同狀態的連鎖變動(A->B->C)。當不同的資料要套用同個元件時。
  useEffect(() => {
    // console.log(
    //   '首次渲染(render)之後(after)執行一次。之後當相依變數有更動之後(after)，又會執行一次'
    // )
  }, [total])
  // ^^^^^^^ total加入到相依變數陣列中，類似要監聽total狀態的更動(change)事件
  // 注意: 因為useEffect與render有絕對關係，能加入到相依變數陣列中的變數，必然要和re-render(update)有關
  // 因此只有props與state(或兩者衍生的變數)才能加入到相依性陣列

  // 樣式4: 元件被移出真實DOM之前(before)會執行一次
  // 說明: 近似於生命周期方法中的componentWillUnmount(或稱為clean-up清理函式)
  // 使用情況: 通常搭配樣式2使用，作某些元件移出時釋放記憶體或是呼叫反函式(移除計時器/自定事件…)
  useEffect(() => {
    return () => {
      console.log('元件被移出真實DOM之前(before)會執行一次')
    }
  }, [])

  return (
    <>
      <h1>Effect使用4種樣式範例</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <br />
      <Link href="/">連至首頁</Link>
    </>
  )
}
