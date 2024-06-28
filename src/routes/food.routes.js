import { Router } from "express";
import { changeOrderStatus, createFoodController, deleteFoodController, foodOrderController, getAllFoodController, getFoodsByCategory, getFoodsByRestaurant, getSingleFoodController, searchController, updateFoodController } from "../controller/foodController.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router=Router()

router.route("/create").post(createFoodController)
router.route("/getall").get(getAllFoodController)
router.route("/getsingle/:id").get(getSingleFoodController)
router.route("/getbyres/:id").get(getFoodsByRestaurant)
router.route("/getbycategory/:id").get(getFoodsByCategory)
router.route("/update/:foodId").put(updateFoodController)
router.route("/delete/:id").delete(deleteFoodController)

////place order
router.route("/order").post(verifyJWT,foodOrderController)
router.route("/status/:orderId").put(changeOrderStatus)

router.route("/search").get(searchController)




export default router;