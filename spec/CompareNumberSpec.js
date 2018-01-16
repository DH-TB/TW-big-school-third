const CompareNumber = require('../src/CompareNumber');

describe('CompareNumber()', () => {
    const answers = '1234';

    it('should return 4A0B when number and position all right', () => {
        const inputs = '1234';
        const expectResult = '4A0B';
        expect(CompareNumber.compareNumber(answers, inputs)).toEqual(expectResult);
    })

    it('should return 0A4B when number all right but position all error', () => {
        const inputs = '4321';
        const expectResult = '0A4B';
        expect(CompareNumber.compareNumber(answers, inputs)).toEqual(expectResult);
    })

    it('should return 2A2B when have two number and position all right but have two number right position error', () => {
        const inputs = '1243';
        const expectResult = '2A2B';
        expect(CompareNumber.compareNumber(answers, inputs)).toEqual(expectResult);
    })

    it('should return 0A0B when have no number right and position right', () => {
        const inputs = '5678';
        const expectResult = '0A0B';
        expect(CompareNumber.compareNumber(answers, inputs)).toEqual(expectResult);
    })
})