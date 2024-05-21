import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
    },

    role: {
        type: String,
        enum: ['admin', 'user', 'influencer'],
    },
}, {
    timestamps: true
});
const User = model("User", userSchema);

export default User;