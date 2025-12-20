const mongoose = require('mongoose');

const gymSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    membershipType: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        default: 0
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "Active"
    }
});

// Model ka naam 'GymMember' aur collection ka naam 'GymMembers' banega
const GymMember = mongoose.model("GymMember", gymSchema, "GymMembers");

module.exports = GymMember;