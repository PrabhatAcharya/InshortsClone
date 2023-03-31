import data from './constants/data.js';
import News from './model/news-schema.js'
//this file is created  , whenever server starts, this fill will put all the data from data.js to server

// and to validate the data from data .js we need to use model.
const DefaultData=async()=>{
    try {
        // await News.deleteMany({});
       await News.insertMany(data);
       console.log("data imported successfully");
    } catch (error) {
        console.log('Error',error.message);
    }
}
export default DefaultData;