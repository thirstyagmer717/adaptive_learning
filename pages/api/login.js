import dbConnect from "../../helpers/dbconnect";
import bcrypt from 'bcrypt'
import user from '../../models/user'
import jwt from 'jsonwebtoken'


dbConnect()

export default async(req, res)=>{
    try{
        if(!req.body.email || !req.body.password){
            res.status(422).json({error:"Input all fields"})
            return
        }
    
        const currUser = await user.findOne({email: req.body.email})
        if(!currUser){
            res.status(422).json({error:"User not found"})
            return
        }

        const matchPassword = await bcrypt.compare( req.body.password, currUser.password)      
        if(matchPassword){
            const token = jwt.sign({userNow:{userId: currUser._id, name: currUser.name, email: currUser.email,teacherSelector:currUser.teacherSelector}}, process.env.JWT_SECRET, {
                expiresIn:"2d"
            })
            
            console.log(currUser)
            console.log(token)

            res.status(201).json({token}) 
        }
        else{
            res.status(422).json({error:"email or password don't match"})
            return
        }
    }
    catch(err){
        console.log(err)
    }
    

} 