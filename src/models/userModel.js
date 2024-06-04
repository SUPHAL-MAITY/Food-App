import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"




const userSchema=new Schema({
    userName:{
        type:String,
        required:[true,"user name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,

    },
    password: {
        type: String,
        required: [true, "password is required"],
      },
    address: {
        type: Array,
      },
    phone: {
        type: String,
        required: [true, "phone number is required"],
      },
    usertype: {
        type: String,
        required: [true, "user type is required"],
        default: "client",
        enum: ["client", "admin", "vendor", "driver"],
      },
      role:{
        type:Number,
        default:0,
      },
    profile: {
        type: String,
        default:
          "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
      },
    answer: {
        type: String,
        required: [true, "Asnwer is required"],
      },
    refreshToken:{
        type: String,
      }

},{timestamps:true})


userSchema.pre("save",async function(next){
  if(!this.isModified("password")) return next();
  this.password= await bcrypt.hash(this.password,10)
  next()
})


userSchema.methods.isPasswordCorrect= async function(password){
  return await bcrypt.compare(password,this.password)

}


userSchema.methods.generateAccessToken=function(){

  const payLoad={
    _id:this._id,
    userName:this.userName,
    email:this.email,

  };

  const options={
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  };

  return jwt.sign(payLoad , process.env.ACCESS_TOKEN_SECRET, options)

}

userSchema.methods.generateRefreshToken=function(){

  const payLoad={
    _id:this._id,
    userName:this.userName,
    email:this.email,

  };

  const options={
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
  };
  return jwt.sign(payLoad, process.env.REFRESH_TOKEN_SECRET ,options)

}


export const User=mongoose.model("User",userSchema)
