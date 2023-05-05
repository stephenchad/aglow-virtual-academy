const mongoose = require('mongoose');

const { Schema } = mongoose;

const academicTermSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true,
            duration: "1 year",
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
    },
    { timestamps: true }
);

const AcademicTerm = mongoose.model("AcademicTerm", academicTermSchema);
module.exports = AcademicTerm;