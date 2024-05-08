import { useState } from 'react'
import Child from '@/components/effect-props/child'

export default function EffectProps() {
  const [user, setUser] = useState({ name: 'Nike', age: 10 })

  return (
    <>
      <h1>Effect有關props範例</h1>
      <Child />
      <hr />
      <button
        onClick={() => {
          setUser({ ...user, age: 18 })
        }}
      >
        age=18
      </button>
      <button
        onClick={() => {
          setUser({ ...user, name: 'Iris' })
        }}
      >
        name=Iris
      </button>
    </>
  )
}
