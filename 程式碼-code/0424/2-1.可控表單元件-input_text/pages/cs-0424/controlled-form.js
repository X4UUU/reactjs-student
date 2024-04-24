import { useState } from 'react'

export default function ControlledForm() {
  const [inputText, setInputText] = useState('')

  return (
    <>
      <h1>可控表單元件範例</h1>
      <div title="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </div>
    </>
  )
}
