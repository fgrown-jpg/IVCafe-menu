// import axios from "axios"
// const client= axios.create({
//     baseURL:"https://fgrown-jpg.github.io/host_API/"

// })
// export async function getProduct() {
//     const {data}=await client ("/products")
//     return data
    
// }

// export async function getItem(id:string | number) {
//     const {data}=await client(`/products/${id}`)
//     return data
// }

import axios from "axios"

const client = axios.create({
  baseURL: "https://fgrown-jpg.github.io/host_API/"
})

export async function getProduct() {
  const { data } = await client.get("menu.json")
  return data.products
}

export async function getItem(id: string | number) {
  const { data } = await client.get("menu.json")

  const product = data.products.find(
    (item: any) => String(item.id) === String(id)
  )

  return product
}