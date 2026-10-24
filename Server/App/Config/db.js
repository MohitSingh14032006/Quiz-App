import mongoose from "mongoose"

let dbConnection = async() =>{
    let dbConnect = await mongoose.connect(`mongodb://localhost:27017/${process.env.DBNAME}`)
}

export default dbConnection
