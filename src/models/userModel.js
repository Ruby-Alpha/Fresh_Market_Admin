import {Schema, model} from "mongoose";

const userSchema = new Schema ({
    firstName : { type: String, required:true},
    lastName : { type: String, required:true},
    email : { type:String, required:true},
    password : {type:String, required:true} 
});

const userModel = model('User', userSchema, 'users');

export default userModel