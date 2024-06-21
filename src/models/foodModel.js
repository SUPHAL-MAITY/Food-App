import mongoose,{Schema} from "mongoose";



const foodSchema=new Schema({
    title: {
        type: String,
        required: [true, "Food Title is required"],
      },
      description: {
        type: String,
        required: [true, " food description is required"],
      },
      price: {
        type: Number,
        required: [true, "food price is required"],
      },
      imageUrl: {
        type: String,
        default:
          "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
      },
      foodTags: {
        type: String,
      },
      category: {
        type: Schema.Types.ObjectId,
        ref:"Categories",
      },
      code: {
        type: String,
      },
      isAvailable: {
        type: Boolean,
        default: true,
      },
      restaurant: {
        type:Schema.Types.ObjectId,
        ref: "Restaurant",
      },
      rating: {
        type: Number,
        default: 5,
        min: 1,
        max: 5,
      },
      ratingCount: {
        type: Number,
        default: 0,

      },

},{timestamps:true})


export const Foods= mongoose.model("Foods",foodSchema)
