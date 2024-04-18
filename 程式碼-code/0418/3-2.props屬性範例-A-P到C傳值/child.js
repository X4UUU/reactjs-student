import React from 'react'

// 子女元件可以從函式的傳入參數得到父母傳給它的值
// props必定是一個物件
export default function Child(props) {
  console.log(props)
  return (
    <>
      <h2>Child</h2>
      <p>title={props.title}</p>
      <p>price={props.price}</p>
      <p>isConnected={props.isConnected ? 'true' : 'false'}</p>
      <p>aa={JSON.stringify(props.aa)}</p>
      <p>oa={JSON.stringify(props.oa)}</p>
      <p>sum(1,2)={props.sum(1, 2)}</p>
    </>
  )
}
