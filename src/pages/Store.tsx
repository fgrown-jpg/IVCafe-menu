import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";

import type { IProduct } from "../../services/type";
import ProductItem from "../components/productitem/ProductItem";
import Sidebar from "../components/sidebar/Sidebar";
import { useShoppingCartContext } from "../components/context/ShoppingContext";

function Store() {
  const{searchQuery}=useShoppingCartContext()
    const [selectedCategory,setSelectedCategory]=useState<string|null>(null)
  const [products, setProducts] = useState<IProduct[]>([]);

 useEffect(() => {
  getProduct().then((data) => {
    console.log("DATA:", data);
    setProducts(data);
  });
}, []);
  const filteredProducts= products.filter((item)=>{
    
      const matchesCategory=selectedCategory?
      item.category.toLowerCase()==selectedCategory.toLowerCase()
  :true;
const matchesSearch=searchQuery?item.title.toLowerCase().includes(searchQuery.toLowerCase()):true;
return (matchesCategory && matchesSearch)
})
    
  return (
    <div className="px-4">
      <Sidebar setSelectedCategory={setSelectedCategory}/>
          <h2 className="text-xl font-semibold text-gray-700 my-8">آیتم ها </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 rounded-2xl">

      {filteredProducts.map((item) => {
        return (
          
            <ProductItem {...item} />
          
        );
      })}
    </div>
    </div>
  );
}

export default Store;
