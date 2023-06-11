const Name=require('../models/nameModel.js');
const {StatusCodes}=require('http-status-codes');

const postname=async (req,res)=>{
    const {name}=req.body;
console.log(`before saving ${name}`);
    if(!name){
        console.log("see theres no name");
        res.status(400).json({
            error:"there is no name here"
        })}
        try{
console.log("before name saved");
        const nameSaved= await Name.create({name});
console.log(`name saved is ${nameSaved}`);
console.log("after name saved");
        res.status(200).json({
            message:"created succesfuly"
        })
    
}catch(error){
    res.status(500).json({
        error:"error saving name to databse"
    })
}

};


const getname=async (req,res)=>{
    const namefound= await Name.find();
console.log(`the names found were ${namefound}`);

if(!namefound){
    res.status(404).json({
        message:"name is not found in the database"
    })

}

res.status(200).json(namefound);
}

module.exports={postname,getname};