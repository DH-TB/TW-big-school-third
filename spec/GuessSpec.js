const Guess = require('../src/Guess');
const AnswerGenerate = require('../src/AnswerGenerator');

describe('Guess()',()=>{
    it('should return 4A0B when inputs is 1234 ',()=>{
        const inputs = '1234';

        spyOn(AnswerGenerate, "randomGenerate").and.returnValue('1234');

        const expectResult = '4A0B';

        expect(Guess.guess(inputs)).toEqual(expectResult);
    })

    it('should return 0A4B when inputs is 4321',()=>{
        const inputs = '1234';

        spyOn(AnswerGenerate, "randomGenerate").and.callFake(()=>'4321');

        const expectResult = '0A4B';

        expect(Guess.guess(inputs)).toEqual(expectResult);
    })


})