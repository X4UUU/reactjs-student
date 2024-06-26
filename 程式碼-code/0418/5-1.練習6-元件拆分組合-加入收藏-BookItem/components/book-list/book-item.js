import Image from 'next/image'
// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function BookItem({ book, handleToggleFav }) {
  return (
    <>
      <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <Image
            onClick={() => {
              handleToggleFav(book.isbn)
            }}
            src={book.fav ? bookmarkIconFill : bookmarkIcon}
            alt=""
          />
        </td>
      </tr>
    </>
  )
}
