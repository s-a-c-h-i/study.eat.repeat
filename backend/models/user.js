import mongoose, { model } from 'mongoose';
const {Schema} = mongoose;  
const userschema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6,"password must be 6 characters"]
    },
    branch:{
        type:String,
        required:true
    },
    timetableimgurl:{
        type:String,required:true
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
    },
    assignments:{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'assignment'
    },
    points:{
        type:Number,default:0
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'

    },
    chapters:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chapter'
    },
    

})

const User=mongoose.model('user',userschema)
export default User;