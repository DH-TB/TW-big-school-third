class CompareNumber{

    static compareNumber(answers,inputs){
        const input = inputs.split('');
        const answer = answers.split('');

        const rightNumberLength = input.filter(i=>answer.includes(i)).length;
        const x = input.filter(i=>input.indexOf(i)===answer.indexOf(i)).length;
        const y = rightNumberLength - x;

        return `${x}A${y}B`;
    }
}

module.exports = CompareNumber;