interface ISideBar {
  setSelectedCategory:(category:string|null)=>void

}
function Sidebar({setSelectedCategory}:ISideBar) {
  const categories=["قهوه سرد","قهوه گرم","نوشیدنی سرد","نوشیدنی گرم", "شیک و بستنی"]
  return (

    <div className="px-4">

    <h2 className="text-5xl font-serif text-[rgb(122,160,114)] my-8 ">IV Cafe</h2>
    <div className="flex flex-wrap gap-3 ">
      {categories.map((category)=>{
        return <button key={category} className=" px-3 py-2  sm-auto cursor-pointer font-sans font-extrabold text-[#a09472] border-2 rounded-2xl " onClick={()=>setSelectedCategory(category)}>{category.toUpperCase()}</button>
        
      })}
      <button  className=" px-3 py-2 w-full sm-auto cursor-pointer  font-sans font-extrabold text-[#a09472] border-2 rounded-2xl m-3" onClick={()=>setSelectedCategory(null)}>همه</button>
 
    </div>
    </div>
  );
}

export default Sidebar;
