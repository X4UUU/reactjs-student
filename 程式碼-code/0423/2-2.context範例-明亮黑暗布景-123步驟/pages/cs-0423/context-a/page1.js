import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'

export default function Page1() {
  //2. 在任何⼦元件層級深度，使⽤ useContext 勾⼦讀取它:
  const value = useContext(ThemeContext)
  console.log(value)

  return (
    <>
      <h1>Page1</h1>
      <p>{JSON.stringify(value)}</p>
    </>
  )
}
