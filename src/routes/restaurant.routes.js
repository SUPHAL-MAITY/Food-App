import { Router } from "express";
import {  verifyJWT } from "../middlewares/auth.middleware.js";



const router=Router()


import { createRestaurantController, deleteRestaurantController, getAllRestaurants, getRestaurantByUser, getSingleRestaurantController } from "../controller/restaurantController.js"; 



router.route("/create").post(verifyJWT ,createRestaurantController)
router.route("/getresbyowner").get(verifyJWT ,getRestaurantByUser)

router.route("/getall").get(getAllRestaurants)
router.route("/getsingle/:id").get(verifyJWT ,getSingleRestaurantController)
router.route("/delete/:id").delete(verifyJWT ,deleteRestaurantController)





export default router;