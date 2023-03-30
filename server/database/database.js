import mongoose from "mongoose";


const Connection= async()=>{
    const URL = `mongodb+srv://prabhat:SCRAM@clusterinshorts.p4oc60j.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{
            useNewUrlParser: true,
        })
        console.log('Database connected successfully')
        
    } catch (error) {
        console.log("Error while connecting to server",error);
    }
}
export default Connection;