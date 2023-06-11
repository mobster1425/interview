const express=require('express');
const router=express.Router();

const {postname,getname}=require("../controllers/nameController");

router.route("/").post(postname).get(getname)

module.exports=router;