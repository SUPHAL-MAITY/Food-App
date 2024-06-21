import { Restaurant } from "../models/restaurantModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";





const createRestaurantController=asyncHandler(async(req,res)=>{

    const {title,imageUrl,foods,pickup,delivery,isOpen,logoUrl,rating,ratingCount,location}=req.body

    if(!title || !location){
        throw new ApiError(400,"please provide title and address")
    }

    const newRestaurant=new Restaurant({
        title,imageUrl,foods,pickup,delivery,isOpen,logoUrl,rating,ratingCount,location,owner:req.user._id
    })
    
    await newRestaurant.save()

    res.status(200).json(new ApiResponse(200,{},"New  restaurant created successfully"))

    

})



const getAllRestaurants=asyncHandler(async(req,res)=>{

   const restaurants = await Restaurant.find({}) 

   if(!restaurants){
    throw new ApiError(400,"No Resturant Availible")
   }

   return res.status(200).json(new ApiResponse(200,{
    restaurants,totalCount:restaurants.length
   },"All restaurants obtained successfully"))




})


const getSingleRestaurantController=asyncHandler(async(req,res)=>{
    const {id}=req.params
    if(!id){
        throw new ApiError(400,"Id not found in the params for single restaurant")
    }

    const restaurant=await Restaurant.findById({_id:id})
    
    if(!restaurant){
        throw new ApiError(400,"Restaurant not found from the id")

    }

    return res.status(200).json( new ApiResponse(200,restaurant,"Single restaurant data is obtained"))




})


const getRestaurantByUser=asyncHandler(async(req,res)=>{
    const {_id}=req.user
    if(!_id){
        throw new ApiError(400,"Id is not found from the middleware for finding restaurant by user")
    }
    
    

    const restaurants=await Restaurant.find({owner:_id})

    if(!restaurants){
        throw new ApiError(400,"Restaurant is not found from the owner ")
    }

    return res.status(200).json( new ApiResponse(200,{restaurants,count:restaurants.length}," restaurants data is obtained"))


})


const updateRestaurant=asyncHandler(async(req,res)=>{

    const {id} = req.params

    const {title,imageUrl,foods,pickup,delivery,isOpen,logoUrl,location}=req.body

    if(!title || !location){
        throw new ApiError(400,"please provide title and address")
    }

    const restaurant=await Restaurant.findByIdAndUpdate(id,{
        $set:{title,imageUrl,foods,pickup,delivery,isOpen,logoUrl,location}
    },{new:true})

    if(!restaurant){
        throw new ApiError(400,"Restaurant is not found while trying to update the restaurant")
    }

    return res.status(200).json(new ApiResponse(200,restaurant,"Single restaurant is  updated"))

})



const deleteRestaurantController=asyncHandler(async(req,res)=>{
    const {id}=req.params
    if(!id){
        throw new ApiError(400,"Id not found while deleting single restaurant")
    }
    await Restaurant.findByIdAndDelete({_id:id})

    res.status(200).json(new ApiResponse(200,{},"restaurant deleted successfully"))

})


export {createRestaurantController,getAllRestaurants,getSingleRestaurantController,deleteRestaurantController,getRestaurantByUser,updateRestaurant}