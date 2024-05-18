import { Router } from "express";



const router=Router()


import { createRestaurantController, deleteRestaurantController, getAllRestaurants, getSingleRestaurantController } from "../controller/restaurantController.js"; 



router.route("/create").post(createRestaurantController)
router.route("/getall").get(getAllRestaurants)
router.route("/getsingle/:id").get(getSingleRestaurantController)
router.route("/delete/:id").delete(deleteRestaurantController)





export default router;