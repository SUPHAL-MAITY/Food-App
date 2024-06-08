import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../models/userModel.js"
import jwt from "jsonwebtoken"



export const verifyJWT=asyncHandler(async(req,res,next)=>{

    try {

      ////take the token 
      ////validate
      ////decode
      ////find user
      ///validate user
      ////set req.user 

      // const token=req.cookies?.accessToken || req.header["Authorization"]?.replace("Bearer","")
      const token=req.cookies?.accessToken || req.headers.authorization
      // console.log("token obtained")
      if(!token){
        throw new ApiError(401,"Unauthorized request")
      }
      // console.log(token)

      const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
      // console.log(decodedToken)

      const user=await User.findById(decodedToken?._id).select("-password -refreshToken")

      if(!user){
        throw new ApiError(401,"Invalid Access Token")
      }

      req.user=user
      next()

        
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid Access Token")
    }

      

})





