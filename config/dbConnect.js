const mongoose = require('mongoose');
const dbConnect = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('The connection to the mongodb database was very successful');
    } catch (error) {
        console.log('The connection to the mongodb database failed', error.message);
    }
};
dbConnect();
 