const baseUrl =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'

const sample = [
  {
    id: 1,
    picture: 'https://via.placeholder.com/150',
    stock: 5,
    name: 'iPhone 12 Pro',
    price: 25000,
    tags: '蘋果,大螢幕',
  },
  {
    id: 2,
    picture: 'https://via.placeholder.com/150',
    stock: 5,
    name: 'iPhone 12',
    price: 15000,
    tags: '蘋果,小螢幕',
  },
]

export const loadProducts = async () => {
  // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
  try {
    const res = await fetch(baseUrl)
    return await res.json()
  } catch (e) {
    console.error(e)
    return sample
  }
}

export const loadProduct = async (pid = '') => {
  try {
    if (!pid) throw new Error('pid是必要參數')

    const res = await fetch(`${baseUrl}/${pid}`)
    return await res.json()
  } catch (e) {
    console.error(e)
    return sample[0]
  }
}
