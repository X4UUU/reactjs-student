import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // 父母元件狀態(內部私有的)
  const [pData, setPData] = useState('parent data')

  return (
    <>
      <h2>Parent(父母元件)</h2>
      <ChildA pData={pData} />
      {/* <ChildB /> */}
    </>
  )
}
