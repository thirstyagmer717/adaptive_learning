import dbConnect from "../../helpers/dbconnect"
import quiz from "../../models/quiz"
dbConnect()
export default async(req,res)=>{
    const result = await quiz.findByIdAndUpdate(req.body._id,{courseId:req.body.courseId,name:req.body.name,questions:req.body.questions})
    console.log(result);
    res.json({message:"updated"})
}
