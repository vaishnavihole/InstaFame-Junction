import { Schema, model } from "mongoose";

const dealSchema = new Schema({
    amount: {
        type: Number,
    },
    note: {
        type: String,
        required: true
    },
    packageId: {
        type: Schema.Types.ObjectId,
        ref: 'Package'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
const Deal = model("Deal", dealSchema);

export default Deal;