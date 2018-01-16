const AnswerGenerate = require('./AnswerGenerator');
const CompareNumber = require('./CompareNumber');

class Guess{
    static guess(inputs){

        const answers = AnswerGenerate.randomGenerate();
        return CompareNumber.compareNumber(answers,inputs);
    }
}

module.exports = Guess