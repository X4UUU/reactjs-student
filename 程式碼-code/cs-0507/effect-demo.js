import { useState } from 'react'

export default function EffectDemo() {
  const [name, setName] = useState('Nike')
  const [force, setForce] = useState(false)
  return (
    <>
      <h1>Effect說明範例</h1>
      <p>{name}</p>
      <button
        onClick={() => {
          setName('User1')
        }}
      >
        改為User1
      </button>
      <button
        onClick={() => {
          setName('User2')
        }}
      >
        改為User2
      </button>
      <button
        onClick={() => {
          setForce(!force)
        }}
      >
        反相force
      </button>
    </>
  )
}
