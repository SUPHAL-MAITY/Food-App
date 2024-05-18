import { Router } from "express";
import { createCategories, deleteCategories, getAllCategories, updateCategories } from "../controller/categoryController.js";


const router=Router()



router.route("/create").post(createCategories)
router.route("/getall").get(getAllCategories)
router.route("/update/:id").put(updateCategories)
router.route("/delete/:id").delete(deleteCategories)



export default router;