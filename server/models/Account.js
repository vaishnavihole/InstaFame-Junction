import {Schema, model} from "mongoose";

const accountSchema = new Schema({
     accountType:{
        type: String,
        enum: ['instagram', 'facebook', 'twitter', 'linkedin', 'youtube'],
    },
    handle:{
        type: String,
    },
    followers:{
        type: Number,
        default: 0,
        min: 0
    },
    subscribers:{
        type: Number,
        default: 0,
        min: 0
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
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