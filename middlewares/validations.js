import { body } from "express-validator";
   export const userValidation=[
    body('FullName',"FullName is required").not().isEmpty(),
    body('Email',"Email is required").not().isEmpty(),
    body('Email',"invalid Email ").not().isEmail(),
    body('FullName',"FullName is required").not().isEmpty(),
    body('Password',"password  is required").not().isEmpty(),
    body('Password',"Password must be strong").isStrongPassword()
];
 export const schoolValidation=[
    body('SchoolName',"School Name is required").not().isEmpty(),
     body('SchoolLogo',"School Logo is required").not().isEmpty(),
    body('SchoolAddress.Province',"Province is required").not().isEmpty(),
    body('SchoolAddress.District',"District is required").not().isEmpty(),
    body('SchoolAddress.Sector',"Sector is required").not().isEmpty(),
    body('SchoolAddress.Cell',"cell is required").not().isEmpty(),
    body('SchoolAddress.Village',"Village is required").not().isEmpty(),
    body('SchoolBursar.FullName'," Bursar name is required").not().isEmpty(),
    body('SchoolBursar.Email'," Bursar  email is required").not().isEmpty(),
    body('SchoolEmail',"School Email is required").not().isEmpty(),
    body('SchoolEmail',"invalid Email").isEmail()
]
