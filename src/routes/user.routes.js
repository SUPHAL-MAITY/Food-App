import { Router } from "express";
import { deleteProfileController, forgotPasswordController, getUserController, updatePasswordController, updateUserController } from "../controller/userController.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router=Router()

router.route("/id").get(getUserController)
router.route("/update").put(verifyJWT,updateUserController)
router.route("/passwordupdate").put(updatePasswordController)
router.route("/forgotpassword").put(forgotPasswordController)
router.route("/delete/:id").delete(deleteProfileController)

export default router;