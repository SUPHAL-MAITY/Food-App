import { createContext,useContext } from "react";



export const SearchContext=createContext({
    cart:[],
    updateCart:()=>{},
    handleCart:()=>{},
})



export const CartProvider=SearchContext.Provider


export default function useSearch(){
    return useContext(SearchContext)
}



