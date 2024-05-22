import mongoose from "mongoose";

const gradeSchema  = new mongoose.Schema({
    class_id: {
        type: Number,
        required: true
    },
    learner_id: {
        type: Number,
        required: true
    },
    scores:
        [
            {
                type: {
                    type: String,
                    enum: ['exam','quiz','homework'],
                    message: '{VALUE} is not Exam, Quiz, or Homework'
                },
                score: {
                    type: Number
                },
            }
        ]
});

export default new mongoose.model('Grades', gradeSchema);