import React, { createContext, useContext,useState } from 'react'
import { getItem } from '../../../services/api';
import { useLocalStorage } from '../../hooks/useLocalStorage';


interface ShoppingCartProvider{
  children:React.ReactNode
}
interface CartItem{
  id:number;
  qty:number;
  price:number;
  

}
interface ShoppingCartContext{
  // cartItems:CartItem[]
  // handleAddToCart:(id:number)=>void
  // handleQty:(id:number)=>number
  // cartQty:number
  // handleRemoveFromCart:(id:number)=>void
  // handleDecreaseFromCart:(id:number)=>void
  // handleTotalPrice:(id:number)=>number

  searchQuery:string
  setSearchQuery:(query:string)=>void
}
const GlobalContext=createContext({}as ShoppingCartContext )

export const useShoppingCartContext=()=>{
return useContext(GlobalContext)
}
function ShoppingContext({children}:ShoppingCartProvider) {


  
const [cartItems,setCartItems]=useLocalStorage<CartItem[]>("cartItems",[])

const [searchQuery,setSearchQuery]=useState<string>("")
// const handleAddToCart=async(id:number)=>{
  // try{
  //    const data = await getItem(id)
  //     setCartItems((currentItem)=>{
  //   let selectedItem=currentItem.find((item)=>item.id==id)
  //   if(selectedItem==null){
  //     return [...currentItem,{id:id, qty:1,price:data.price }]
      
  //   }
  //   else {
  //     return currentItem.map((item)=>{
  //       if(item.id==id){return {...item,qty:item.qty+1}
  //       }
  //       else{
  //         return item
  //       } 
        
  //     })
      

//   })
//   }catch(e){console.log(e)}
 
// }

// const handleDecreaseFromCart=(id:number)=>{
//   setCartItems((currentItem)=>{
//    let selected= currentItem.find((item)=>item.id==id)
//    if(selected?.qty==1){
//     return currentItem.filter((item)=>item.id!==id)
//    }
//    else{
//     return currentItem.map((item)=>{
//       if(item.id==id){
//         return {...item,qty:item.qty-1}
//       }else return item 
//     })
//    }
//   })
// }
// const handleRemoveFromCart=(id : number)=>{
//     setCartItems((currentItem)=>{
//     return currentItem.filter((item)=>item.id!==id)
//   })

//   }

// const handleQty=(id:number)=>{
//   return cartItems.find((item)=>item.id==id)?.qty || 0
  

// }
// const handleTotalPrice=(id:number)=>{
//   return cartItems.filter((item)=>item.id==id).reduce((totalPrice,item)=>totalPrice +item.price*item.qty,0)
// }


 const cartQty=cartItems.reduce((totalQty,item)=>totalQty+item.qty,0)


  return (
   <GlobalContext.Provider value={{setSearchQuery,searchQuery}}>
    {children}
   </GlobalContext.Provider>
  )

}
export default ShoppingContext