import dbConnect from "../../helpers/dbconnect"
import course from "../../models/course"
dbConnect() 
export default async(req,res)=>{
    
    try{
        course.findByIdAndDelete(req.body._id,(err)=>{console.log(err);})   
        res.status(201).json({ans:"deleted"})
    }   
        
    catch(err){
        res.json({error:err.message})
    }
}