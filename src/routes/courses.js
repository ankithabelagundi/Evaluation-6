const express =require("express");
const router=express.Router();
const supabase =require("../config/supabaseClient");
const validateEnrollment = require("../middleware/validateEnrollment");
router.get("/courses",async(req,res)=>{
    const{data,error}=await supabase
    .from("courses")
    .select("*");
    if (error){
        return res.status(500).json({error:error.message});
    }
    res.json(data);

});
router.post("/enroll",validateEnrollment,async(req,res)=>{
    
    const{student_name,course_id}=req.body;
    const{data,error}=await supabase
    .from("enrollments")
    .insert([{student_name, course_id}])
    if (error){
        return res.status(500).json({error:error.message});
    }
    res.json({
        message:"Student enrolled sucessfully", data
    });

});

router.get("/courses/:id/enrollments",async(req,res)=>{
    
    const course_id=req.params.id;
    const{data,error}=await supabase
    .from("enrollments")
    .select("*")
    .eq("course_id",course_id);
    if (error){
        return res.status(500).json({error:error.message});
    }
    res.json( data);

});
module.exports=router;