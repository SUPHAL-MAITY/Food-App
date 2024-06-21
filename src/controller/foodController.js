import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Foods } from "../models/foodModel.js";
import { Orders } from "../models/orderModel.js";





const createFoodController=asyncHandler(async(req,res)=>{
   const {title,description,price,imageUrl,foodTags,category,code,isAvailable,restaurant}=req.body

   if(!title || !description || !price || !restaurant){
    throw new ApiError(400,"title,description , price and restaurant  are necessary for creating food model")
   }

 const newFood= new Foods({title,description,price,imageUrl,foodTags,category,code,isAvailable,restaurant})


  await  newFood.save()

  return  res.status(200).json(new ApiResponse(200,newFood,"New food created"))


})


const getAllFoodController=asyncHandler(async(req,res)=>{
    const foods=await Foods.find({})
    if(!foods){
        throw new ApiError(400,"foods are not obtained")
    }

    return res.status(200).json(new ApiResponse(200,{totalFoods:foods.length,foods},"All foods are obtained"))


})

const getSingleFoodController=asyncHandler(async(req,res)=>{
    const {id}=req.params

    if(!id){
        throw new ApiError(400,"Id is not obtained while getting single food")
    }

    const food=await Foods.find({_id:id})

    if(!food){
        throw new ApiError(400,"Food is not obtianed while getting single food")
    }
    
    return res.status(200).json(new ApiResponse(200,food,"A single food is obtained "))


})

const getFoodsByRestaurant=asyncHandler(async(req,res)=>{

    const {id}=req.params

    if(!id){
        throw new ApiError(400,"Id is not obtained while geting the foods by restaurants")
    }

    const foods=await Foods.find({restaurant:id})

    if(!foods){
        throw new ApiError(400,"Foods are not obtained from restaurant ")
    }

    return res.status(200).json( new ApiResponse(200,{totalCount:foods.length,foods},"Foods are obtained from restaurant"))



})


const getFoodsByCategory=asyncHandler(async(req,res)=>{

    const {id}=req.params
     
    if(!id){
        throw new ApiError(400,"Id is not found while trying to get foods by category ")
    }

    const foods=await Foods.find({category:id})
   

    if(!foods){
        throw new ApiError(400,"Food  is not found while trying to get foods by category ")
    }

    return res.status(200).json(new ApiResponse(200,{foods,count:foods.length},"Food is obtianed from category"))

})


const updateFoodController=asyncHandler(async(req,res)=>{
    const {foodId}=req.params
    const {title,description,price,imageUrl,foodTags,category,code,isAvailabe,restaurant,rating,ratingCount}=req.body

    await Foods.findByIdAndUpdate(foodId,{title,description,price,imageUrl,foodTags,category,code,isAvailabe,restaurant,rating,ratingCount},{new:true})
    

    return res.status(200).json(new ApiResponse(200,{},"Foods are updated successfully"))

})

const deleteFoodController=asyncHandler(async(req,res)=>{
    const {id}=req.params

    if(!id){
        throw new ApiError(400,"Id not found while deleting the food")
    }

    await Foods.findByIdAndDelete({_id:id})

    return res.status(200).json(new ApiResponse(200,{},"Food was deleted "))

})






///////////////////////////food order controllers

const foodOrderController=asyncHandler(async(req,res)=>{

    ///in the cart of foods will store array of objects {_id,price,details}
    const {cart}=req.body
    if(!cart){
        throw new ApiError(400,"Cart is not found for placing order")
    }

    let total=0;
    cart.map((i)=>(
        
        total+=i.price
        
    ) )

    
   const newOrder=new Orders({
     foods:cart,
     payment:total,
     buyer:req.user._id
   } )


   await newOrder.save()

   return res.status(200).json(new ApiResponse(200,newOrder,"Prders are placed successfully"))
   

})





const changeOrderStatus=asyncHandler(async(req,res)=>{

    const {orderId}=req.params
    const {status}=req.body


    const order=await Orders.findByIdAndUpdate(orderId,{
        status
    },{new:true})


 return res.status(200).json(new ApiResponse(200,order,"Status of the order is updated"))

})











export {getFoodsByCategory,createFoodController,getAllFoodController,getSingleFoodController,getFoodsByRestaurant,updateFoodController,deleteFoodController,foodOrderController,changeOrderStatus}






