const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim:true,
    },
    lastName :{
        type: String,
        required: true,
        trim:true,
    },
    email:{
        type: String,
        required: true,
        trim:true,
    },
    password:{
        type: String,
        required: true,
    },
    token:{
        type:String,
    },
    resetPasswordExpiration:{
        type:Date,
    },
    accountType:{
        type: String,
        required: true,
        enum:["Admin", "Student", "Instructor"],
    },
    active: {
		type: Boolean,
		default: true,
	},
	approved: {
		type: Boolean,
		default: true,
	},
   

    image:{
        type:String,
        required:true,
    },
   

},
{ timestamps: true })

module.exports = mongoose.model("User", userSchema);