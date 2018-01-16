const AnswerGenerator = require('../src/AnswerGenerator');

describe('AnswerGenerator()',()=>{
    it('should return 4 number and no repeat',()=>{

        expect(AnswerGenerator.randomGenerate().length).toEqual(4);
    })
})