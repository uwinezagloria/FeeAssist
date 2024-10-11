import express from "express"
import { deleteSchool, getAllSchool, getSchoolByEmail, getSchoolById, registerNewSchool } from "../controllers/school.controller.js";
import { schoolValidation } from "../middlewares/validations.js";
const router=express.Router()
router.route("/register/school").post(schoolValidation,registerNewSchool)
router.route("/list/allSchools").get(getAllSchool)
router.route("/getById/school").get(getSchoolById)
router.route("/getByEmail/school").get(getSchoolByEmail)
router.route("/delete/school").delete(deleteSchool)
export default router
