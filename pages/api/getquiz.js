import dbConnect from "../../helpers/dbconnect"
import quiz from "../../models/quiz"
dbConnect()
export default async(req,res)=>{
    try{
        const data = await quiz.find({courseId:req.body.courseId})
        // data = JSON.parse(data)
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
    }
}