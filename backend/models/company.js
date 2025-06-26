import mongoose from 'mongoose';
const { Schema } = mongoose;

const companySchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        // required: true  
    },
    location:{
        type: String,
        // required: true
    },
    website:{
        type: String,
        // required: true
    },
    logo:{
        type: String,
        default: ''
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

     }
  ,{timestamps:true});
const Company=mongoose.model('Company',companySchema)
export default Company;