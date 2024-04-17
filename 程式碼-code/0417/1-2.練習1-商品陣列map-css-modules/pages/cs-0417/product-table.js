// 導入時就自動轉為JS資料格式
import products from '@/data/Product.json'
// 這裡的styles是由CSS Module產生的物件，只有.module.css檔案才能這樣使用
import styles from '@/styles/product-table.module.css'

export default function ProductTable() {
  console.log(products)

  return (
    <>
      {/* 要用styles['my-table']這樣的方式來存取 */}
      <table className={styles['my-table']}>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <img src={`/pics/${v.photos.split(',')[0]}`} alt="" />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
