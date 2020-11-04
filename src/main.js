//FAQ => toggling answer

function toggleAnswer() {
    const childEl = this.querySelector('.answer-before');
    childEl.classList.toggle('answer-after')
}

const questions = document.querySelectorAll('.questions')
questions.forEach((question) => {
    question.addEventListener('click', toggleAnswer)
})


