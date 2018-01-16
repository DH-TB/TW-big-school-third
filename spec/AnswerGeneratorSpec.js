const AnswerGenerator = require('../src/AnswerGenerator');

describe('AnswerGenerator()',()=>{
    it('should return 4 number',()=>{

        expect(AnswerGenerator.randomGenerate().length).toEqual(4);
    })

    it('should return no repeat',()=>{
        expect(AnswerGenerator.randomGenerate()).not.toEqual(AnswerGenerator.randomGenerate());

    })
})