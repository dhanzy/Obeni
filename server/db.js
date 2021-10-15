const mongoose = require('mongoose');

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).catch((error)=>{
        console.log(`Error Occured: ${error}`)
        process.exit(1)
    });

    console.log(`MongoDB connected: ${conn.connection.host}`)
};

module.exports = connectDB;
