import { useState } from 'react'

export default function ImageUpload() {
  // 記錄被選中的檔案
  const [selectedFile, setSelectedFile] = useState(null)
  // 預覽圖片的網址(呼叫`URL.createObjectURL`產生)
  const [previewURL, setPreviewURL] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    console.log(file)

    if (file) {
      setSelectedFile(file)
      // 產生預覽網址
      setPreviewURL(URL.createObjectURL(file))
    } else {
      setSelectedFile(null)
      setPreviewURL('')
    }
  }

  return (
    <>
      <h1>圖片上傳與預覽</h1>
      <hr />
      <div>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div>
        預覽:
        <img src={previewURL} alt="" />
      </div>
    </>
  )
}
