import { asyncHandler } from "../utils/asyncHandler.js"; 
import { User } from "../models/userModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessTokenAndRefreshToken=async(id)=>{
////using id find the user
///generate access token
/// generate refresh token
///set the refresh token in the db
///save the user
///return accessToken and refreshToken

try {


const user=await User.findById(id)


const accessToken=user.generateAccessToken()


const refreshToken=user.generateRefreshToken()


user.refreshToken=refreshToken

await user.save({validateBeforeSave:false})

return {accessToken,refreshToken}
    
} catch (error) {
    throw new ApiError(500,"Something went wrong while generating token")
    
}






}




const registerController=asyncHandler(async(req,res)=>{

     ///take the input
    /// validation
    ///// check user
    ///// hashing password(method mentioned in userSchema already)
    //// create user
    //check registered or not
    //return res

   

   
    const {userName,email,password,address,phone,usertype,answer,profile}=req.body
   

    if([userName,email,password,address,phone,usertype,answer].some((value)=>value?.trim()==="")){
        throw new ApiError(400,"All fields are necessary")
    }

    const existing=await User.findOne({email})
    if(existing){
        throw new ApiError(409,"Email already registered please login")
    }



    const user=await User.create({
       userName,
       email,
       password,
       address,
       phone,
       usertype,
       answer,
       profile


    })

const createdUser=await User.findById(user._id).select("-refreshToken -profile")
if(!createdUser){
    throw new ApiError(500,"There is something wrong while registering the user")
}

return res.status(201).json(
    new ApiResponse(200,createdUser,"user registered successfully")
)


})



const loginController=asyncHandler(async(req,res)=>{

    //take the inputs
    //validate the inputs
    //find the user
    //compare the password
    //access token and refresh token ......(refresh token will be saved in db)
    //find the logged-in-user and select  except password and refresh token
    /// set in the response of cookie of refresh token and access token and send the res of logged in user

   const  {userName,email, password}=req.body


   console.log(userName)
   
if([userName,email,password].some((value)=>value?.trim()==="")){
    throw new ApiError(400,"All fields are necessary while log in")
}

const user=await User.findOne({
    $or:[{userName},{email}]
})



if(!user){
    throw new ApiError(404,"User does not exist")
}


const isPassWordValid=await user.isPasswordCorrect(password)

if(!isPassWordValid){
    throw new ApiError(400,"Password is wrong during login")
}



const {accessToken,refreshToken}=await generateAccessTokenAndRefreshToken(user._id)

const loggedInUser=await User.findById(user._id).select("-refreshToken -password")

const options={
    httpOnly:true,
    secure:true
}

return res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken,options).json(new ApiResponse(200,{
    user:loggedInUser,accessToken,refreshToken
},"User logged in successfully"))

})


const logOutController=asyncHandler(async(req,res)=>{
   await User.findByIdAndUpdate(req.user._id, {
    $set:{
        refreshToken
        :undefined}

   },{new:true}) 


   const options={
    httpOnly:true,
    secure:true
}

return res.status(200).clearCookie("accessToken",options).clearCookie("refreshToken",options).json(new ApiResponse(200,{},"User logged out succesfully"))

})


const adminController=asyncHandler(async(req,res)=>{
    return res.status(200).json(new ApiResponse(200,{ok:true},"Proper admin access granted"))

})




export {registerController,loginController,logOutController,adminController};