const express=require("express");
const router=new express.Router();
const auth=require("../../Middleware/auth.js");
const loginLabController=require("../../Controllers/loginlabController.js");

router.post("/",loginLabController.loginLab);

module.exports=router;