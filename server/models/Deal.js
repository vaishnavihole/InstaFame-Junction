import { Schema, model } from "mongoose";

const dealSchema = new Schema({
  price:{
        type: Number,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    package:{
        type:  Schema.Types.ObjectId,
       ref: 'Package'
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    influncer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    
}, {
    timestamps: true
});
const Deal = model("Deal", dealSchema);

export default Deal;