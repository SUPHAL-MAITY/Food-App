import { Router } from "express";
import { adminController, logOutController, loginController, registerController } from "../controller/authController.js";
import  {isAdmin, verifyJWT}  from "../middlewares/auth.middleware.js";


const router=Router()

router.route("/register").post(registerController)
router.route("/login").post(loginController)
router.route("/logout").post(verifyJWT,logOutController)


// admin check

router.route("/admin-auth").get(verifyJWT,isAdmin,adminController)





export default router;