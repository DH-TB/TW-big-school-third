const App = require('../src/App');
const AnswerGenerate = require('../src/AnswerGenerator');

describe('app()',()=>{
    it('should return Congratulation when inputs is 1234 ',()=>{

        spyOn(AnswerGenerate, "randomGenerate").and.returnValue('1234');

        spyOn(console,"log");

        App.game();

        expect(console.log).toEqual('Congratulation');
    })
})