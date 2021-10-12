import dbConnect from "../../helpers/dbconnect"
import quiz from "../../models/quiz"
dbConnect()
export default async(req,res)=>{
    console.log(req.body);
    try{if(!req.body.name){
        return res.status(422).json({error:"Quiz Name is Compulory"})
    }
    else{
        const newQuiz = await new quiz({
            courseId:req.body.courseId,
            name:req.body.name,
            questions:req.body.questions
        }).save()
        console.log(newQuiz)
        res.status(201).json({message:"Course created successful"})
    }}
    catch(err){
        console.log(err);
    }
}