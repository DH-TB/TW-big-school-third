const AnswerGenerate = require('./AnswerGenerator');
const CompareNumber = require('./CompareNumber');

class App {
    static game() {
        this.start();

        let chance = 6;
        const answers = AnswerGenerate.randomGenerate();

        this.print(chance);

            process.stdin.resume();
            process.stdin.setEncoding('utf8');
            process.stdin.on('data', (inputs)=> {
                const array = inputs.trim().split('');
                const repeatNumberLength = array.filter((ele, i, arr) => arr.indexOf(ele) !== i).length;

                if (array.length !== 4 || repeatNumberLength > 0) {
                    chance--;
                    this.illegal();
                    this.print(chance);
                }
                else if(inputs.trim() === answers){
                    this.success();
                    process.exit();
                }
                else {
                    const result = CompareNumber.compareNumber(answers, inputs);
                    console.log(result + '\n');
                    chance--;
                    if (chance === 0) {
                        this.failure();
                        process.exit();
                    }
                    this.print(chance);
                }
            })
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

