import mongoose from 'mongoose'

const quizSchema = new mongoose.Schema({
        courseId:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        questions:[
            {
                name:{
                    type:String,
                    required:false
                },
                answers:[
                    {
                        name:{
                            type:String,
                            required:false
                        },
                        isCorrect:{
                            type:Boolean,
                            required:true,
                            default:false
                        }

                    }
                ],
                point:{
                    type:Number,
                    required:false,
                    default:1
                }
            }
        ]

    },

    {timestamps: true
})

export default mongoose.models.quiz || mongoose.model('quiz', quizSchema)