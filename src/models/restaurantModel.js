import mongoose,{Schema} from "mongoose";



const restaurantSchema=new Schema({
    title: {
        type: String,
        required: [true, " Resturant title is required"],
      },
      imageUrl: {
        type: String,
      },
      foods: { type: Array },
      time: {
        type: String,
      },
      pickup: {
        type: Boolean,
        default: true,
      },
      delivery: {
        type: Boolean,
        default: true,
      },
      isOpen: {
        type: Boolean,
        default: true,
      },
      logoUrl: {
        type: String,
      },
      rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5,
      },
      ratingCount: { type: String },
      code: {
        type: String,
      },
      location: {
        type:String,
        required: [true, " Resturant location is required"],
      },
      owner:{
        type: Schema.Types.ObjectId,
        ref: "User",

      }


},{timestamps:true})


export const Restaurant=mongoose.model("Restaurant",restaurantSchema)