import type { IProduct } from "../../../services/type";
// import { FaCirclePlus } from "react-icons/fa6";
// import { useShoppingCartContext } from "../context/ShoppingContext";
import { Link } from "react-router";

type TproductItem = IProduct;
function ProductItem({ image, title, category, price, id }: TproductItem) {
  // const { handleAddToCart } = useShoppingCartContext();
  console.log("IMAGE:",image)
  return (
    <>
    <div className=" w-full max-w-sm">
      <div className="bg-white flex justify-center rounded-t-3xl overflow-hidden">
        <Link to={`/product/${id}`}>
        
          <img 
            src="/images/afagato.jpg"
            alt={title}
            className="w-full max-w-[200px] h-60   object-contain scale-150  p-5 "
          />
        </Link>
      </div>

      <div className="bg-[#CADCAE] rounded-b-3xl shadow-lg shadow-gray-400 ">
        <p className="truncate text-gray-700 p-3 font-sans font-bold">
          {title}
        </p>
        <p className="p-3 text-gray-500 uppercase text-sm">{category}</p>
        <div className=" flex flex-row justify-between">
          <p className="p-3 text-sm text-gray-600 m-5">{price}T</p>
          {/* <button className="">
            <FaCirclePlus
              className="text-white size-8 m-5 hover:opacity-70 cursor-pointer"
              onClick={() => handleAddToCart(id as number)}
            />
          </button> */}
          
        </div>
      </div>
    
      </div>
    </>
  );
}

export default ProductItem;
