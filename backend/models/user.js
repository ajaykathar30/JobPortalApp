import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:String,
    required:true
  },
  role:{
   type:String,
   enum:['student','recruiter'],
   required:true
  },
  profile:{
    bio:{type:String},
    skills:{type:[String]},
    resume:{type:String},
    resumeOriginalName:{type:String},
    company:{type:mongoose.Schema.Types.ObjectId,ref:'Company'},
    profilePhoto:{
        type:String,
        default:''
    }
  }
  
},{timestamps:true});
const User=mongoose.model('User',userSchema)
export default User;
