import { Router } from "express";
import { changeOrderStatus, createFoodController, deleteFoodController, foodOrderController, getAllFoodController, getFoodsByCategory, getFoodsByRestaurant, getSingleFoodController, updateFoodController } from "../controller/foodController.js";


const router=Router()

router.route("/create").post(createFoodController)
router.route("/getall").get(getAllFoodController)
router.route("/getsingle/:id").get(getSingleFoodController)
router.route("/getbyres/:id").get(getFoodsByRestaurant)
router.route("/getbycategory/:id").get(getFoodsByCategory)
router.route("/update/:foodId").put(updateFoodController)
router.route("/delete/:id").delete(deleteFoodController)

////place order
router.route("/order").post(foodOrderController)
router.route("/status/:orderId").put(changeOrderStatus)




export default router;