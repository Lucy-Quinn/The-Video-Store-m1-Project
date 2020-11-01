


// question-one

//    function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }


//Hamburger menu
function hamburger() {
    var x = document.querySelector(".nav-bar");

    console.log(x);

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var y = document.getElementById("hamburger-icon");
y.addEventListener('click', hamburger)

//FAQ => toggling answer

function toggleAnswer() {
    const x = document.querySelector('.questions');
    const y = document.querySelector('.answer-before');
    y.classList.toggle('answer-after')

}
let questions = document.querySelector('#section-two-faq')
questions.addEventListener('click', toggleAnswer)
// console.log(questions);
