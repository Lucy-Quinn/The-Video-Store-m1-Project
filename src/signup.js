'use strict';

class Signup {
    constructor() {
        this.nameInput = document.querySelector('#name');
        this.movieQuoteInput = document.querySelector('#favourite-movie-quote');
        this.emailInput = document.querySelector('#email');
        this.passwordInput = document.querySelector('#password');
        this.repeatPasswordInput = document.querySelector('#repeat-password');

        this.buttonInput = document.querySelector('#signup-button');
        this.errorsWrapper = document.querySelector('#error-messages');
        this.successMessage = document.querySelector('#success-messages');
    };

    handleEmailInput = (event) => {
        const emailInput = event.target;
        const email = emailInput.value;

        validator.validateValidEmail(email);
        validator.validateUniqueEmail(email);

        this.setErrorMessages();
    };

    handlePasswordInput = (event) => {
        const passwordInput = event.target;
        const repeatPasswordInput = this.repeatPasswordInput;
        const password = passwordInput.value;
        const repeatPassword = repeatPasswordInput.value;

        validator.validatePassword(password);
        validator.validateRepeatPassword(password, repeatPassword);

        this.setErrorMessages();
    };

    handleRepeatPasswordInput = (event) => {
        const passwordInput = event.target;
        const repeatPasswordInput = this.repeatPasswordInput;
        const password = passwordInput.value;
        const repeatPassword = repeatPasswordInput.value;

        validator.validatePassword(password);
        validator.validateRepeatPassword(password, repeatPassword);

        this.setErrorMessages();
    };

    setErrorMessages = () => {

        this.errorsWrapper.innerHTML = '';
        this.errorsWrapper.classList = '';
        const errorsObj = validator.getErrors();

        const errorStringsArray = Object.values(errorsObj);

        errorStringsArray.forEach((str) => {
            const p = document.createElement('p');
            p.textContent = str;
            this.errorsWrapper.classList = 'message-container';
            this.errorsWrapper.appendChild(p);
        })
    };

    saveData = (event) => {
        event.preventDefault();
        const name = this.nameInput.value;
        const movieQuote = this.movieQuoteInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        const newUser = new User(name, movieQuote, email, password);

        const p = document.createElement('p');
        p.textContent = 'Thank you for signing up!'
        this.successMessage.classList = "success-container"
        this.successMessage.appendChild(p)
        this.errorsWrapper.style.display = 'none';


        db.saveNewUser(newUser);


        this.nameInput.value = '';
        this.movieQuoteInput.value = '';
        this.emailInput.value = '';
        this.passwordInput.value = '';

        this.redirect();
    };

    addListeners = () => {
        this.emailInput.addEventListener('input', this.handleEmailInput);
        this.passwordInput.addEventListener('input', this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);
        this.buttonInput.addEventListener('click', this.saveData);
    };

    redirect = () => {
        setTimeout(() => {
            location.assign('./login.html')
        }, 2000);
    }
}

const signup = new Signup();

window.addEventListener('load', signup.addListeners)
