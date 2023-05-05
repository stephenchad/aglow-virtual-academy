const mongoose = require('mongoose');

const { Schema } = mongoose;

const examResultSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        exam: {
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        grade: {
            type: Number,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        passMark: {
            type: Number,
            required: true,
            default: 50
        },
        // Failed or Passed
        status: {
            type: String,
            required: true,
            enum: ['failed', 'passes'],
            default: 'failed',
        },
        // Excellent/Good/Poor
        remarks: {
            type: String,
            required: true,
            enum: ['Excellent', 'Good', ""],
            default: 'failed',
        },
        position:{
            type: Number,
            required: true,
        },
        Subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject",
            //required: true,
        },
        classLevel: {
            type: Schema.Types.ObjectId,
            ref: "ClassLevel",
        },
        academicTerm: {
            type: Schema.Types.ObjectId,
            ref: "AcademicTerm",
            required: true,
        },
        academicYear: {
            type: Schema.Types.ObjectId,
            ref: "AcademicYear",
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);
const ExamResult = mongoose.model("ExamResult", examResultSchema);
modeule.exports = ExamResult;