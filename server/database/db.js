import mongoose from "mongoose";
const Connection = async (username,password) => {
  const URL = `mongodb://${username}:${password}@ac-tsgsgvf-shard-00-00.nx8wu3c.mongodb.net:27017,ac-tsgsgvf-shard-00-01.nx8wu3c.mongodb.net:27017,ac-tsgsgvf-shard-00-02.nx8wu3c.mongodb.net:27017/?ssl=true&replicaSet=atlas-bfug6u-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to database successfully");
  } catch (error) {
    console.log("Error while connecting with database ", error);
  }
};
export default Connection;