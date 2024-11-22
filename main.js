class WordCounter {
    constructor() {
        this.content = document.getElementById('content');
        this.result = document.getElementById('result');
        this.button = document.getElementById('submit-button');
        this.button.addEventListener('click', () => this.countWords());
    }

    countWords() {
        const text = this.content.value.trim();
        const wordCount = text ? text.split(' ').length : 0;
        this.displayResult(wordCount);
    }

    displayResult(count) {
        this.result.textContent = `Word Count: ${count}`;
    }
}

new WordCounter();