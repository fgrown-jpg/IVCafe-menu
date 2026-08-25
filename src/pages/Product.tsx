import { useEffect, useState } from "react"
import { getItem } from "../../services/api"
import { useParams } from "react-router"
import type { IProduct } from "../../services/type"
import { FaStar } from "react-icons/fa";
// import Button from "../components/button/Button";
// import { useShoppingCartContext } from "../components/context/ShoppingContext";
// import { LuPlus } from "react-icons/lu";
// import { LuMinus } from "react-icons/lu";


function Product() {
  // const {handleAddToCart,cartItems,handleDecreaseFromCart,handleQty}=useShoppingCartContext()
  const [product,setProduct]=useState<IProduct>()

  const params=useParams<{id : string} >()
  useEffect(()=>{
    getItem(params.id as string).then((data)=>{
      console.log(data)
      setProduct(data)
    })
  },[])
  // console.log(cartItems);

  return (
    <div className="flex justify-center  items-center m-10 ">
    <div className="flex flex-row  shadow-2xl  ">
      
        <div className="bg-white rounded-l-2xl flex justify-center ">
           <img className="object-contain p-5" src={product?.image} alt={product?.title} />
        </div>
        <div className="bg-[#CADCAE] w-full rounded-r-2xl p-4 flex justify-center flex-col">
          <p className="text-gray-500 uppercase">{product?.category}</p>
          <p className="font-semibold text-xl text-gray-900 pt-5 " >{product?.title}</p>
          <p className="flex leading-none items-center text-sm pt-4 text-gray-500">
            <span className= "align-middle"><FaStar className="align-middle text-white"/></span>
            <span className="pl-1">{product?.rating.rate} </span>
            
   
            </p>

          <p className="text-sm pt-10 text-gray-600">{product?.description}</p>

          <p className="font-bold text-xl font-mono pt-4">{product?.price}T</p>
           <div className="mt-4 flex flex-row">
          {/* {handleQty(parseInt(params.id as string))==0?
          <Button onClick={
            ()=>handleAddToCart(parseInt(params.id as string))
            } className="h-10 w-30 mr-3" variant="primary">
            ADD TO CART
          </Button>: <div className="flex justify-between gap-5 bg-amber-50 px-2 rounded-lg border-1 border-gray-400"> */}
          {/* <button onClick={()=>handleDecreaseFromCart(parseInt(params.id as string))}><LuMinus/>
          </button>
                  <span>{handleQty(parseInt(params.id as string))}</span>
                  <button  onClick={()=>handleAddToCart(parseInt(params.id as string))}><LuPlus /></button></div>} */}

        </div>

        </div>
        
        
      
    </div>
    </div>
  )
}

export default Product
