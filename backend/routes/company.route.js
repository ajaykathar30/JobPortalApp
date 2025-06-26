import express from 'express'
import isAuth from "../middlewares/auth.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { singleUpload } from '../middlewares/multer.js';

const router=express.Router()
router.route('/register').post(isAuth,registerCompany)
router.route('/get').get(isAuth,getCompany)
router.route('/get/:id').get(isAuth,getCompanyById)
router.route('/update/:id').put(isAuth,singleUpload,updateCompany)

export default router