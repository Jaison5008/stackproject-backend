const mongoose = require('mongoose');

const uri = 'mongodb+srv://jaisoneee:Jaison5008@cluster0.vk0nq3v.mongodb.net/stack';
// Prints "MongoServerError: bad auth Authentication failed."
mongoose.connect(uri, {
  serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err.reason));