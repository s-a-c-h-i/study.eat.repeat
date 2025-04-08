import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
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

const project = mongoose.model('Project', projectSchema);

export default project;