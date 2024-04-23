import List from '@/components/context-a/list'
import SwitchButton from '@/components/context-a/switch-button'
// 用於取代a元件的特別元件，可以在不同頁面保持住狀態
import Link from 'next/link'

export default function Page1() {
  return (
    <>
      <h1>Page1</h1>
      <SwitchButton />
      <List />
      <hr />
      {/*  用於取代a元件的特別元件，可以在不同頁面保持住狀態 */}
      <Link href="/cs-0423/context-a/page2">到Page2</Link>
    </>
  )
}
