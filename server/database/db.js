import mongoose from "mongoose";
const Connection = async (URL) => {
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