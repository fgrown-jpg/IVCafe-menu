
import { Link } from 'react-router'
// import { FaShoppingBasket } from "react-icons/fa";

 import { useShoppingCartContext } from './context/ShoppingContext';
// import { BiSearchAlt } from "react-icons/bi";
import { MdStore } from "react-icons/md";

function Header() {
  const {setSearchQuery}=useShoppingCartContext()

 
  



  return (
    <div className='flex justify-between py-3 flex-row-reverse'>
      
      {/* { <div className='flex flex-row-reverse '>
      <Link className='m-5 text-white font-semibold font-serif text-lg' to={'/cart'} ><FaShoppingBasket className='size-7 relative' /> </Link>
{cartQty!==0? */}
      {/* <span className='bg-[#A4B465] rounded-full size-4 flex justify-center items-center absolute text-white right-3 top-3.5 text-[10px] font-bold'>{cartQty}</span>: null} */}
<div>
        <input className='border-[#ffffff] border-2 focus:outline-none rounded-xl ml-40 p-3 h-5 mt-5  relative font-serif' type="text" placeholder='جست و جو' onChange={(e)=>setSearchQuery(e.target.value)} />
        {/* <span className='absolute top-6.5  right-23 '><BiSearchAlt className='text-white size-5'/></span> */}
       
</div>
      {/* </div>} */}
      <Link className='m-3 sm:m-5 text-white font-semibold font-serif text-lg' to={'/'}>
      <span><MdStore  className='size-8 sm:size-7 relative ' />

      </span>

      
      </Link>

    </div>
  )
}

export default Header