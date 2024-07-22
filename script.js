function checkAnswer(button, isCorrect) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }
}
