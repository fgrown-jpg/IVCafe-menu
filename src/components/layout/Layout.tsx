import React from 'react'
import Header from '../Header'

interface Ilayout{
    children:React.ReactNode
}
function Layout({children }:Ilayout) {
  return (
    <div className='bg-[url("/public/images/Matcha.jpg")] bg-cover bg-no-repeat bg-center min-h-screen  mx-auto px-4 '>
    
        <Header/>
    
    {children}
 
    
    </div>
    
  )
}

export default Layout