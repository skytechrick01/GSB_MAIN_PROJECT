const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/User_Data');
const db = mongoose.connection;
db.on('error',(error) => {
    console.log('MongoDB connection error:');
});

db.once('open',() => {
    console.log('Connected to MongoDB database.');
});

const Signup_Schema = new mongoose.Schema({
    Profile_Id:{
        type: Number
    },
    Profile_Log:{
        type: Object
    },
    First_Name:{
        type: String
    },
    Last_Name:{
        type: String
    },
    Mobile_Number:{
        type: Number
    },
    Email:{
        type: String
    },
    User_Password:{
        type: String
    },
    Verified:{
        type: String
    },
    Created_Account: {
        type: Date,
    },
    createdAt:{
        type: Date,
        expires: null
    },
    Authentication:{
        type: Object
    }
});

const Sign_Mol = mongoose.model("Main_User", Signup_Schema);
module.exports = {
    Signup_Model: Sign_Mol
};
