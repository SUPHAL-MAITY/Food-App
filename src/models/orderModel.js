import mongoose,{Schema} from "mongoose";


const orderSchema=new Schema({
    foods: [{ type: Schema.Types.ObjectId, ref: "Foods" }],
    payment: {},
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["preparing", "prepared", "on the way", "deliverd"],
      default: "preparing",
    },
},{timestamps: true})

export const Orders=mongoose.model("Orders",orderSchema)