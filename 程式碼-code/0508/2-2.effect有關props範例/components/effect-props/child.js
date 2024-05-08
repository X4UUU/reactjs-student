import { useEffect } from 'react'

export default function Child(props) {
  console.log('render', props)

  useEffect(() => {
    console.log('props有變動')
  })

  useEffect(() => {
    console.log('props有變動')
  }, [props])

  return (
    <>
      <h2>子女元件</h2>
    </>
  )
}
