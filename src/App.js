const scanf = require('scanf');
const AnswerGenerate = require('./AnswerGenerator');
const CompareNumber = require('./CompareNumber');

class App {
    static game() {
        App.start();

        let chance = 6;
        const answers = AnswerGenerate.randomGenerate();

        while (chance > 0) {
            App.print(chance);

            const inputs = scanf('%s');
            const array = inputs.split('');
            const repeatNumberLength = array.filter((ele, i, arr) => arr.indexOf(ele) !== i).length;

            if (array.length !== 4 || repeatNumberLength > 0) {
                chance--;
                App.illegal();
            }
            else if(inputs === answers){
                App.success();
                return;
            }
            else {
                const result = CompareNumber.compareNumber(answers, inputs);
                console.log(result + '\n');
                chance--;
                if (chance === 0) {
                    App.failure();
                    return;
                }
            }
        }
    }

    static start() {
        console.log('Welcome!\n')
    }

    static print(chance) {
        console.log(`Please input your number(${chance})`);
    }

    static success() {
        console.log('Congratulations!');
    }

    static failure() {
        console.log('Game Over');
    }

    static illegal() {
        console.log('Cannot input illegal numbers!\n')
    }

}
module.exports = App;

App.game();

