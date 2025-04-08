import mongoose from 'mongoose';

const { Schema } = mongoose;

const courseSchema = new Schema({
     name:{
        type: String,
        required: true
     },
     credit:{
        type: Number,
        required: true

     }
     ,
    chapters:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'chapter'
        }
    ],
    userid:{
        type:String,
        required:true
    }
      
})

const assignment= mongoose.model('Assignment', assignmentSchema);

export default assignment;