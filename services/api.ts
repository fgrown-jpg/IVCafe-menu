// import axios from "axios"
// const client= axios.create({
//     baseURL:"http://localhost:3000/"

// })
// export async function getProduct() {
//     const {data}=await client ("/products")
//     return data
    
// }

// export async function getItem(id:string | number) {
//     const {data}=await client(`/products/${id}`)
//     return data
// }

// import db from "../public/data/db.json";

// export async function getProduct() {
//   return db.products;
// }

// export async function getItem(id: string | number) {
//   return db.products.find((p) => p.id === String(id));
// }
export async function getProduct() {
  const response = await fetch("/public/data/db.json");
  const data = await response.json();

  return data.products;
}

export async function getItem(id: string | number) {
  const response = await fetch("/public/data/db.json");
  const data = await response.json();

  return data.products.find(
    (product: any) => String(product.id) === String(id)
  );
}