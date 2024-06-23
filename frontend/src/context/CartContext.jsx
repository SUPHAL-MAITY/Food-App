import { createContext,useContext } from "react";



export const CartContext=createContext({
    cart:[],
    updateCart:()=>{},
})



export const CartProvider=CartContext.Provider


export default function useCart(){
    return useContext(CartContext)
}



