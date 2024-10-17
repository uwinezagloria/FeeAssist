import schoolModel from "../models/school.model.js";
import { validationResult } from "express-validator";
import customError from "../middlewares/customError.js";
//registering school
export const registerNewSchool = async (req, res, next) => {
    try {
        //check if school is registered before
        const check = await schoolModel.findOne({ SchoolEmail: req.body.SchoolEmail })
        if (check) {
            const error = new customError("the school has already registered", 400)
            return next(error)
        }
        //validation
        const err = validationResult(req)
        if (!err.isEmpty()) {
            const errors = new customError(err.array()[0].msg, 400)
            return next(errors)
        }
        const newSchool = await schoolModel.create(req.body)
        res.status(201).json({
            message: "new school added",
            newSchool: newSchool
        })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json("there is an error in registering new school")
    }
}
//getting all schools
export const getAllSchool = async (req, res, next) => {
    try {
        const foundAll = await schoolModel.find()
        res.status(200).json({
            message: "List of all schools",
            Schools: foundAll
        })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "there is error in getting all schools",
        })
    }
}
//getting a school by id 
export const getSchoolById = async (req, res, next) => {
    try {
        const getOne = await schoolModel.findById({ _id:req.query.id })
        //check if there is a school with that id and display error if not
        if (!getOne) {
            const error = new customError(`there is no school with id ${req.query.id}`, 404)
            return next(error)
        }
        //if the school is found then display it
        res.status(200).json({
            message: `the school with id ${req.body.id} is`,
            school: getOne
        })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "There is an error in getting school by it's id" })
    }
}
//get school using it's email
export const getSchoolByEmail = async (req, res, next) => {
    try {
        const findOne = await schoolModel.findOne({ SchoolEmail: req.query.Email })
        //i there is no school with that email return not found
        if (!findOne) {
            const error = new customError(`There is no School with school Email ${req.query.Email}`, 404)
            return next(error)
        }
        //if the school is found then display it
        res.status(200).json({
            message: `the school with this email ${req.query.Email} is`,
            School: findOne
        })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "there is an error in getting school by it's email" })
    }
}
//deleting a school
export const  deleteSchool=async(req,res,next)=>{
    try{
const school=await schoolModel.findByIdAndDelete({_id:req.query.id})
if(!school){
    const error=new customError(`the school with id ${req.query.id} does not exist`,404)
    return next(error)
}
res.status(200).json({message:"the school has deleted succesfully"})
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({message:"something went wrong in deleting a school"})
    }
}