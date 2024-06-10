import {createContext,useContext} from "react"



export const AuthContext=createContext(
   { 
    auth:{
        user:null,
        token:"",
    },
    AuthSet:()=>{},
    
   } 
)

 



export const AuthProvider=AuthContext.Provider


export default function useAuth(){
    return useContext(AuthContext)
}









