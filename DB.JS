const mongoose = require ('mongoose');
require('dotenv').config();

//const mongoURL = 'mongodb://localhost:27017/hotels';
//const mongoURL = 'mongodb+srv://ganeshhande97:Query12345@cluster0.mgidr.mongodb.net/?retryWrites=true&w=majority';
//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    

});
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to mongoDB server');
});

db.on('error',(error)=>{
    console.log('MongoDB connection Error');
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

module.exports = db;