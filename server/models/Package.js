import {Schema, model} from "mongoose";

const packageSchema = new Schema({
    price:{
        type: Number,
    },
    offerPrice:{
        type: Number,
    },
    packageName:{
        type: String,
    },
    packageDescription:{
        type: String,
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