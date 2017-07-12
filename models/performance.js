const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerformanceSchema = new Schema({

        user: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
        testsAttempted: [{
          type: Schema.Types.ObjectId,
          ref: 'test'
        }],
        score: {
          type: Number,
          default: 0
        },
        timeTaken: {
          type: Number,
          default: 0
        },
        totalCorrectAnswers: {
          type: Number,
          default: 0
        },
        totalWrongAnswers: {
          type: Number,
          default: 0
        }

})
var Performance = mongoose.model('performance', PerformanceSchema)
module.exports = Performance;
