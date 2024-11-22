class WordCounter {
    constructor() {
        this.content = document.getElementById('content');
        this.result = document.getElementById('result');
        this.wordButton = document.getElementById('word-button');
        this.letterButton = document.getElementById('letter-button');

        this.wordButton.addEventListener('click', () => this.countWords());
        this.letterButton.addEventListener('click', () => this.countLetters());
    }

    countWords() {
        const text = this.content.value.trim();
        const wordCount = text ? text.split(' ').length : 0;
        this.displayResult(wordCount);
    }

    countLetters() {
        const text = this.content.value.trim();
        let count = 0;
        for (const letters in text) {
            count++
        }
        this.displayResult(count);
    }

    displayResult(count) {
        const type = this.wordButton.contains(document.activeElement) ? 'Word' : 'Letter';
        this.result.textContent = `${type} Count: ${count}`;
    }
}

new WordCounter();