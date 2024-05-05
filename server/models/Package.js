import {Schema, model} from "mongoose";

const packageSchema = new Schema({
    price:{
        type: Number,
        required: true
    },
    offerPrice:{
        type: Number,
       
    },
    packageName:{
        type: String,
        required: true
    },
    packageDescription:{
        type: String,
        required: true
    },
    influencer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    
}, {
    timestamps: true
});
const Package = model("Package", packageSchema);

export default Package;