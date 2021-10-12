import mongoose from 'mongoose'

const dbConnect = ()=>{

    if(mongoose.connections[0].readyState)
    {
        console.log("DB already connected");
        return
    }

    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', ()=>{
        console.log("MongoDB connection successfull");
    })
    mongoose.connection.on('error', (err)=>{
        console.log("ERROR - MongoDB connection NOT successfull");
    })
    
}

export default dbConnect