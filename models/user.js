import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    teacherSelector:{
        type:Boolean,
        required:true
    }
}, 
    {timestamps: true
})

export default mongoose.models.user || mongoose.model('user', userSchema)