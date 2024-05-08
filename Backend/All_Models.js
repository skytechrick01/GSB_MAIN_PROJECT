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
    },
    Cart:{
        type:Object
        
    }
});


const New_Worker = new mongoose.Schema(
    {
        Acode:{type:String},
        Added_By:{type:String},
        First_Name:{type:String},
        Last_Name: {type:String},
        Mobile_Number: {type:String},
        Email: {type:String},
        Create_Password: {type:String},
        Country_Name: {type:String},
        State_Name: {type:String},
        District_Name: {type:String},
        Pin_Code: {type:String},
        City_Name: {type:String},
        Village_Name: {type:String},
        Locality_Road: {type:String},
        Language: {type:String}, 
        Your_Age: {type:String},
        Gender: {type:String},
        Bank_Name: {type:String},
        Account_Name: {type:String},
        Account_Number: {type:String},
        Ifsc_Code: {type:String},
        Upi_Number: {type:String},
        Created_Date:{type:Date},
        Verified:{type:String},
        Ban:{type:String},
        Assistant_Type:{type:String},



    }

);




const a = new mongoose.Schema({

    "Email": {type: String},
    "Sent": {type: String},
    "Date": {type: Date},
    "Done":{type: String},

})







const New_Worker_Mode = mongoose.model("Workers", New_Worker);

const a_ = mongoose.model("Assistants_Confirmation", a);

const Sign_Mol = mongoose.model("Main_User", Signup_Schema);

module.exports = {
    Signup_Model: Sign_Mol,
    New_Worker_Model: New_Worker_Mode,
    Assistant_Confirmation: a_,
};
