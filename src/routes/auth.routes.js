import { Router } from "express";
import { logOutController, loginController, registerController } from "../controller/authController.js";
import  {verifyJWT}  from "../middlewares/auth.middleware.js";


const router=Router()

router.route("/register").post(registerController)
router.route("/login").get(loginController)
router.route("/logout").post(verifyJWT,logOutController)




export default router;