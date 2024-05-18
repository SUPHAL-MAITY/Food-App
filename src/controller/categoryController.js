import { Categories } from "../models/categoryModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";






const createCategories=asyncHandler(async(req,res)=>{

    const {title, imageUrl}=req.body
    console.log(title)

    if(!title ){
        throw new ApiError(400,"Title is neceesary for creating  categories")
    }

    const newCategory=new Categories({title,imageUrl})
    await newCategory.save()

    return res.status(200).json(new ApiResponse(200,newCategory,"New Category is created"))


})


const getAllCategories=asyncHandler(async(req,res)=>{

  const categories=await Categories.find({})

  if(!categories){
    throw new ApiError(400,"Categories not found while trying to get all categories")
}

return res.status(200).json(new ApiResponse(200 ,categories ,"categories are obtained" ))
    


 
})

const updateCategories=asyncHandler(async(req,res)=>{

    const {id}=req.params

    const {title}=req.body


    const updatedCategory=await Categories.findByIdAndUpdate(id,{title},{new:true})

    if(!updatedCategory){
        throw new ApiError(400,"updated category is not found")
    }


    return res.status(200).json(new ApiResponse(200,updatedCategory,"Category is updated successfully"))




})

const deleteCategories=asyncHandler(async(req,res)=>{
    const {id}=req.params
    if(!id){
        throw new ApiError(400,"id not found while deleting categories")
    }

    await Categories.findByIdAndDelete(id)

    return res.status(200).json(new ApiResponse(200,{},"Category is deleted successfully"))



})



export {createCategories,getAllCategories,updateCategories,deleteCategories}

