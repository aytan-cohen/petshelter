const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [2, "Pet name must be more than 2 characters"]
    },
    type: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [2, "Pet type must be more than 2 characters"]
    },
    description: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [2, "Pet description must be more than 2 characters"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    like:{
        type: Number,
        default: 0
    },
    liked:{
        type: Boolean,
        default: false
    }
}, {timestamps: true});

mongoose.model("Pet", PetSchema);