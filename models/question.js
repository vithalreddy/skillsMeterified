const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
                    question: { type: String},
                    optionA: { type: String },
                    optionB: { type: String},
                    optionC: { type: String },
                    optionD: { type: String},
                    answer  :{type:String}
});

const Question = mongoose.model('question', QuestionSchema);
module.exports = Question;
