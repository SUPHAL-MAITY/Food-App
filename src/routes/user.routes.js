import { Router } from "express";
import { deleteProfileController, forgotPasswordController, getUserController, updatePasswordController, updateUserController } from "../controller/userController.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router=Router()

router.route("/getuser").get(verifyJWT,getUserController)
router.route("/update").put(verifyJWT,updateUserController)
router.route("/passwordupdate").put(verifyJWT,updatePasswordController)
router.route("/forgotpassword").put(forgotPasswordController)
router.route("/delete/:id").delete(deleteProfileController)





export default router;