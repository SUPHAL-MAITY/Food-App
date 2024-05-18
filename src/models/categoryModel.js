import mongoose,{Schema} from "mongoose";


const categorySchema=new Schema( {
    title: {
      type: String,
      required: [true, "category title is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
    },
  },
  { timestamps: true })

export const Categories=mongoose.model("Categories",categorySchema)