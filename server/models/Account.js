import {Schema, model} from "mongoose";

const accountSchema = new Schema({
     accountType:{
        type: String,
        enum: ['instagram', 'facebook', 'twitter', 'linkedin', 'youtube'],
    },
    handle:{
        type: String,
        required: true
    },
    followers:{
        type: Number,
        required: true
    },
    subscribers:{
        type: Number,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    
}, {
    timestamps: true
});
const Account = model("Account", accountSchema);

export default Account;