import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
}, 
    {timestamps: true
})

export default mongoose.models.course || mongoose.model('course', courseSchema)