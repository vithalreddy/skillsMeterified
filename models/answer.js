const mongoose = require('mongoose')
const Schema  =  mongoose.Schema;

const answerSchema = new Schema({

                          	user: {
                          	    type: Schema.Types.ObjectId,
                          	    ref: 'User'
                          	  },
                          	  test: {
                          	    type: Schema.Types.ObjectId,
                          	    ref: 'test'
                          	  },
                          	  question: {
                          	    type: Schema.Types.ObjectId,
                          	    ref: 'question'
                          	  },
                          	  userAnswer: {
                          	    type: String
                          	  },
                              correctAnswer: {
                          	    type: String
                          	  },
                              timeTakenEach: {
                                type: Number,
                                default: 1
                              }  //insecs

})

const Answer = mongoose.model('answer', answerSchema);
module.exports = Answer;
