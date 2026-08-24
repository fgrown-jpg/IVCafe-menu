import { getItem } from "../../../services/api";
import { useEffect, useState } from "react";
import type { IProduct } from "../../../services/type";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
// import { useShoppingCartContext } from "../context/ShoppingContext";
interface TCartitem {
  id: number;
  qty: number;
  price: number;
}

function CartItem({ id }: TCartitem) {
  // const {handleQty ,handleAddToCart ,handleRemoveFromCart,handleDecreaseFromCart,handleTotalPrice}=useShoppingCartContext()

  const [item, setItem] = useState<IProduct>();
  useEffect(() => {
    getItem(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="flex flex-row border-gray-400 border-1 rounded-2xl mb-3  items-center p-3 justify-around">
      <img className="h-28 p-10" src={item?.image} alt={item?.title} />

      <p className="mr-2 sm:w-60 md:w-70 lg:-80">{item?.title}</p>

      <div className="flex flex-row gap-3 items-center ">
        {/* <button onClick={()=>handleDecreaseFromCart(item?.id as number)}><LuMinus/></button>
        <span>{handleQty(item?.id as number)}</span>
        <button  onClick={()=>handleAddToCart(item?.id as number)}><LuPlus /></button>
        <p>${handleTotalPrice(item?.id as number)}</p>
        <button onClick={()=>handleRemoveFromCart(item?.id as number)}>
          <MdDeleteForever className="text-red-600 w-6 h-5 " />
          </button> */}
      </div>
    </div>
  );
}

export default CartItem;
