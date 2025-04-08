import mongoose from 'mongoose';

const { Schema } = mongoose;

const chapterSchema = new Schema({
     name:{
        type: String,
        required: true
     },
     
     iscompleted:{
        type: Boolean,
        default: false
     },
     userid:{
        type:String,
        required:true
    }

      
})

const chapter= mongoose.model('Chapter', chapterSchema);

export default chapter;