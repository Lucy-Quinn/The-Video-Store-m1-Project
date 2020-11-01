'use strict';

class Signup {
    constructor() {
        this.nameInput = document.querySelector('#name');
        this.movieQuoteInput = document.querySelector('#favourite-movie-quote');
        this.emailInput = document.querySelector('#email');
        this.passwordInput = document.querySelector('#password');
        this.repeatPasswordInput = document.querySelector('#repeat-password');
        this.buttonInput = document.querySelector('#signup-button');
        this.errorsContainer = document.querySelector('.message-container');
    }

    handleEmailInput = (event) => {
        const emailInput = event.target;
        const emailValue = emailInput.value;
    }

    handlePasswordInput = (event) => {
        const passwordInput = event.target;
        const passwordValue = passwordInput.value;
    }

    handleRepeatPasswordInput = (event) => {
        const passwordRepeatInput = event.target;
        const passwordRepeatValue = passwordRepeatInput.value;
    }

    savingData = (event) => {
        event.preventDefault();
        const name = this.nameInput.value;
        const movieQuote = this.movieQuoteInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        const newUser = new User(name, movieQuote, email, password);

        database.saveNewUser(newUser);
        console.log(newUser);

        this.nameInput.value = '';
        this.movieQuoteInput.value = '';
        this.emailInput.value = '';
        this.passwordInput.value = '';

    }

    addListeners = () => {
        this.emailInput.addEventListener('input', this.handleEmailInput);
        this.passwordInput.addEventListener('input', this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);
        this.buttonInput.addEventListener('click', this.savingData);


    }


}




const signup = new Signup();
//Add all eventListeners to the signup object when the window is loaded.
window.addEventListener('load', signup.addListeners)
