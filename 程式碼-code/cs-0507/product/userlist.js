import React, { useState } from 'react'

export default function Userlist() {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const url =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    const res = await fetch(url)
  }
  return (
    <>
      <h1>用戶列表頁</h1>
      <ul>
        <li>{}</li>
      </ul>
    </>
  )
}
