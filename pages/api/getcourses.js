import dbConnect from "../../helpers/dbconnect"
import course from "../../models/course"
dbConnect()
export default async(req,res)=>{
    try{
        const data = await course.find()
        // data = JSON.parse(data)
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
    }
}