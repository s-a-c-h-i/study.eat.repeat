import mongoose from 'mongoose';

const { Schema } = mongoose;

const assignmentSchema = new Schema({
     name:{
        type: String,
        required: true
     },
     dateofsubmission:{
        type: Date,
        required: true
     },
     isumitted:{
        type: Boolean,
        default: false
     },
     userid:{
        type:String,
        required:true
    }

      
})

const assignment= mongoose.model('Assignment', assignmentSchema);

export default assignment;