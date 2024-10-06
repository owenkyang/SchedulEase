import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        maxlength: [30, 'username can not be more than 20 characters'],
        trim: true,
        unique: true
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'please input a name'],
    },
    password: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        required: true
    }
}, {timestamps: true})
const User = mongoose.model("User", userSchema);
export default User;