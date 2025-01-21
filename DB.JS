const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/hotels', {

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