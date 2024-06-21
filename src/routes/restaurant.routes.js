import { Router } from "express";
import {  verifyJWT } from "../middlewares/auth.middleware.js";



const router=Router()


import { createRestaurantController, deleteRestaurantController, getAllRestaurants, getRestaurantByUser, getSingleRestaurantController, updateRestaurant } from "../controller/restaurantController.js"; 



router.route("/create").post(verifyJWT ,createRestaurantController)
router.route("/getresbyowner").get(verifyJWT ,getRestaurantByUser)

router.route("/getall").get(getAllRestaurants)
router.route("/getsingle/:id").get(getSingleRestaurantController)
router.route("/delete/:id").delete(deleteRestaurantController)
router.route("/update/:id").put(updateRestaurant)





export default router;