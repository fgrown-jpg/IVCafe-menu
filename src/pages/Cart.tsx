
// import { useShoppingCartContext } from '../components/context/ShoppingContext'
// import CartItem from '../components/cartItem/CartItem'
// import { useEffect, useState } from 'react'

// function Cart() {
//   const {cartItems}=useShoppingCartContext()
//   const[total,setTotal]=useState<number>(0)
// useEffect(()=>{
// setTotal(cartItems.reduce((acc,curr)=>acc + curr.price,0))
// },[cartItems])
//   return (
//     <div className='bg-white m-10 rounded-2xl p-5 flex justify-center flex-col '>
//          <h2 className="text-xl font-semibold text-gray-700 mb-5">Shopping Cart</h2>
//          <div>
//           <h2>{total}</h2>
//          </div>
//       {cartItems.map((item)=>{
//         return <CartItem {...item}/>
//       })}
//     </div>
//   )
// }

// export default Cart