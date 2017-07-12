const mongoose = require('mongoose');
const QuestionSchema = require('./question');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
      testName: {
        type: String, required: true
      },
      testCategory: {
        type: String, required: true
      },
      totalScore: {
        type: Number,
        default: 50,
        required: true
      },
      totalQuestions: {
        type: Number,
        default: 5
      },
      testDetails: {
        type: String
      },
      testAttemptedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
      testDuration: {
        type: Number,
        default: 30
      },//minutes
      questions: [{
        type: Schema.Types.ObjectId,
        ref: 'question'
      }]

})

const Test = mongoose.model('test', TestSchema);
module.exports = Test;
