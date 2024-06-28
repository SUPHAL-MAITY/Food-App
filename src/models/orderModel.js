import mongoose,{Schema} from "mongoose";


const orderSchema=new Schema({
    // foods: [{ type: Schema.Types.ObjectId, ref: "Foods" }],
    foods: [{
      description: { type: String, required: true },
      imageUrl:{ type: String},
      id: { type: Schema.Types.ObjectId, ref: "Foods" },
      quantity: { type: Number, required: true },
      title:{type: String, required: true },
      price: { type: Number, required: true },
      total: { type: Number, required: true },
      
  }],
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