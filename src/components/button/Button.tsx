import React, { type ComponentProps } from 'react'
type TVariant= "primary" | "secondary" | "thirdly"
type Tbutton= ComponentProps<"button"> &{
    variant:TVariant
}

function Button({children,variant,style,...rest}:Tbutton) {
  return (
    // <button {...rest} style={{...style ,...checkVariant(variant)}}> {children}</button>
      null
  )
}

export default Button

function checkVariant(variant:TVariant){
if (variant==="primary") {
    return {background:"white" , color:"black",borderRadius:"6px",fontWeight:"600",padding:"6px"}}
    else if(variant==="secondary"){
        return { background:"black" , color:"white",borderRadius:"6px",fontWeight:"600", padding:"6px"}
    }
}