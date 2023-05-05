const mongoose = require('mongoose');

const { Schema } = mongoose;


const subejctSchema = new Schema(
    {
        name : {
            name: String,
            required: true,
        },
        description : {
            name: String,
            required: true,
        },
        teacher: {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
        },
        academicTerm: {
            type: Schema.Types.ObjectId,
            ref: "AcademicTerm",
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
        duration: {
            type: String,
            required: true,
            default: "1 year",
        },
    },
    { timestamps: true }
);

const Subject = mongoose.model("Subject", subejctSchema);
module.exports = Subject;