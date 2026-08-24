import axios from "axios"
const client= axios.create({
    baseURL:"http://localhost:3000/"

})
export async function getProduct() {
    const {data}=await client ("/products")
    return data
    
}

export async function getItem(id:string | number) {
    const {data}=await client(`/products/${id}`)
    return data
}