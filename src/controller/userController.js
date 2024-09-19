import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/userModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";



const testController=(req,res)=>{

    return res.status(200).json(new ApiResponse(200,{key:"I am testing controller"},"particular user details obtained using id"))

}

const getUserController=asyncHandler(async(req,res)=>{
    ///find BY id
    /// validation
    ///hide the password
    ///send response
   

    const {_id}=req.user
    if(!_id){
        throw new ApiError(400,"ID is required")
    }

    const user=await User.findById(_id)
    if(!user){
        throw new ApiError(400,"User not found while trying to get user")
    }

    user.password=undefined;


    return res.status(200).json(new ApiResponse(200,user,"particular user details obtained using id"))


})



const updateUserController=asyncHandler(async(req,res)=>{

    ///take the inputs from the body
    ///validate
    ///findByIdAndUpdate  (use middleware to get the req.user)
    ///send res
    const {userName,address,usertype,phone}=req.body
    

    if([userName,address,usertype,phone].some((value)=>value.trim()==="")){
        throw new ApiError(400,"All fields are necessary for updating the user")
    }

    const user=await User.findByIdAndUpdate(req.user?._id,{
        $set:{userName,address,usertype,phone}
    },{new:true}).select("-password -refreshToken")


    if(!user){
        throw new ApiError(400,"User obtained while updating")
    }


    return res.status(200).json(new ApiResponse(200,user,"User details updated"))


})


const updatePasswordController=asyncHandler(async(req,res)=>{
    
    ///find the user  from the id that is obtained from req.body
    ///take the old password and new pass word
    ///validate
    ///check old password is correct or not
    ///hash the new password
    ///save the hashed  password in db 
    ///send the res 
  const {_id }=req.user
  const {oldPassword,newPassword}= req.body
  if(!_id || !oldPassword || !newPassword){
    throw new ApiError(400,"id ,Old password and new password is necessary")

  }

  

  const user=await User.findById(_id)
  if(!user){
    throw new ApiError(400,"User is not found ")
  }

  const validOldPassword = await  user.isPasswordCorrect(oldPassword)
  

  if(!validOldPassword){
    throw new ApiError(400,"Invalid old password")
  }

user.password=newPassword

await user.save()

return res.status(200).json(new ApiResponse(200,user,"Pasword is updated successfully") )





})


const forgotPasswordController=asyncHandler(async(req,res)=>{

    ///take  answer ,new password  and email from the body
    ///validate 
    ////find the user using email and answer
    
    ///hash the new password
    ///set the password is databse
    ////return the response

    const {email,answer,newPassword}=req.body
    if(!email || !answer || !newPassword){
        throw new ApiError(401,"All fields are necessary during forgot password")
    }

    const user=await User.findOne({email,answer})
    if(!user){
        throw new ApiError(500,"Email not found or invalid answer")
    }

    user.password=newPassword;
    user.save()
   
    return res.status(200).json( new ApiResponse(200,{},"Password has been reset"))



})


const deleteProfileController=asyncHandler(async(req,res)=>{
    const {id}=req.params

    await User.findByIdAndDelete(id)
    return res.status(200).json(new ApiResponse(200,{},"Profile has been deleted successfully"))

})

export {getUserController,updateUserController,updatePasswordController,forgotPasswordController,deleteProfileController,testController}