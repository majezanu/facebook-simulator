import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: 1,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: 1,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    online: {
        type: Boolean,
        required: true,
        default: false
    }
});
const User = mongoose.model('User', userSchema);

export default User;