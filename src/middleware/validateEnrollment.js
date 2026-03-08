const validateEnrollment=(req,res,next)=>{
    const {student_name,course_id}=req.body;
    if(!student_name||!course_id){
        returnres.status(400).json({
            message:"students_name and course_id are required"
        });

    }
    next();
}
module.exports=validateEnrollment;