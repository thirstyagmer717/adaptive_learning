import dbConnect from '../../helpers/dbconnect'
import user from '../../models/user'
import bcrypt from 'bcrypt'

dbConnect()

export default async(req, res)=>{
    try {
        
        if(!req.body.name || !req.body.email || !req.body.password)
        {
            return res.status(422).json({error:"Please provide all details"})
        }

        const User = await user.findOne({email: req.body.email})
        if(User)
        {
            return res.status(422).json({error: "Email already registered, Login Instead"})
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await new user({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            teacherSelector:req.body.teacherSelector            
        }).save()
        console.log(newUser)
        res.status(201).json({message:"SignUp successful"})

    } 
    catch (error) {
        console.log(error)
    }
}