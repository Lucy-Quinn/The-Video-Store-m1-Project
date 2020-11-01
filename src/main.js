
//Hamburger menu
function hamburger() {
    const x = document.querySelector(".nav-bar");

    console.log(x);

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const y = document.getElementById("hamburger-icon");
y.addEventListener('click', hamburger)

//FAQ => toggling answer

function toggleAnswer() {
    const childEl = this.querySelector('.answer-before');
    childEl.classList.toggle('answer-after')
}
let questions = document.querySelectorAll('.questions')
questions.forEach((question) => {
    question.addEventListener('click', toggleAnswer)

})
