// import '@/styles/globals.css'
// import '@/styles/product-table.css'
//  3. 最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它:
import { ThemeContext } from '@/context/theme'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeContext.Provider
      // 使用value屬性提供資料給元件階層以下的所有後代元件(如果是消費者的話)
      value={{ a: 1, b: 2 }}
    >
      {getLayout(<Component {...pageProps} />)}
    </ThemeContext.Provider>
  )
}
