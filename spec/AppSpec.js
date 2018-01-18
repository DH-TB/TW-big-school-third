const stdin = require('mock-stdin').stdin();
const App = require('../src/App');
const AnswerGenerate = require('../src/AnswerGenerator');

describe('app()',()=>{

    beforeEach(()=> {
        spyOn(AnswerGenerate, "randomGenerate").and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');
        App.game();
    });

    it('should return Congratulation when inputs is 1234 ',()=>{

        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6)');

        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith('Congratulations!');
        expect(process.exit).toHaveBeenCalled();
    })

    it('should return illegal when input repeat number', ()=> {

        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6)');

        stdin.send('1134');

        expect(console.log).toHaveBeenCalledWith('Cannot input illegal numbers!\n');
    });
})
