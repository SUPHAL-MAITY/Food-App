import { Router } from "express";
import {  verifyJWT } from "../middlewares/auth.middleware.js";



const router=Router()


import { createRestaurantController, deleteRestaurantController, getAllRestaurants, getSingleRestaurantController } from "../controller/restaurantController.js"; 



router.route("/create").post(verifyJWT ,createRestaurantController)
router.route("/getall").get(getAllRestaurants)
router.route("/getsingle/:id").get(verifyJWT ,getSingleRestaurantController)
router.route("/delete/:id").delete(verifyJWT ,deleteRestaurantController)





export default router;