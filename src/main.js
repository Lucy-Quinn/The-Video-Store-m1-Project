
// // Hamburger menu
// function dropDownMenu() {
//     const navBar = document.querySelector(".nav-bar");
//     if (navBar.style.display === "none") {
//         navBar.style.display = "block";
//     } else {
//         navBar.style.display = "none";
//     }
// }

// const hamburgerIcon = document.getElementById("hamburger-icon");
// hamburgerIcon.addEventListener('click', dropDownMenu)



//FAQ => toggling answer

function toggleAnswer() {
    const childEl = this.querySelector('.answer-before');
    childEl.classList.toggle('answer-after')
}

const questions = document.querySelectorAll('.questions')
questions.forEach((question) => {
    question.addEventListener('click', toggleAnswer)
})


