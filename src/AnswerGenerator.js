class AnswerGenerator {

    static randomGenerate() {
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = [];

        while (result.length < 4) {
            const index = parseInt(Math.random() * array.length);
            const randomNumber = array[index];
            result.push(randomNumber);
            array.splice(index,1)
        }

        return result.join('');
    }
}

module.exports = AnswerGenerator;