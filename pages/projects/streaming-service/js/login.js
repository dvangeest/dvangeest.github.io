const loginBtn = document.querySelector('.sign-up-btn');

const emailInput = document.querySelector('.input-1');
const passwordInput = document.querySelector('.input-2');
const rememberBtn = document.querySelector('.remember-btn');

const RememberTextBox = document.querySelector('.remember-text-box');

let rememberCheck = false;
rememberBtn.addEventListener('click', () => {
    if (rememberCheck === true) {
        rememberCheck = false;
        RememberTextBox.innerHTML = '';
    } else {
        rememberCheck = true;
        RememberTextBox.innerHTML = '&#10005;';
    }
});

loginBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const remember = rememberCheck;

    if (email === '' || password === '') {
        alert('Please fill in all fields');

        return;
    }

    // Email validation
    // Regex for email validation
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

    // test() does a search for a match between an expression and a string, returning true or false
    if (validRegex.test(email) === false) { 
        alert('Email is not valid');

        return;
    } else {
        //alert('Email is valid');
    }

    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');

        return;
    } else {
        //alert('Password is valid');
    }

    if (remember === true) {
        localStorage.setItem('remember', 'true');
    } else {
        localStorage.setItem('remember', 'false');
    }

    if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
 
        alert('Login successful');

        location.href = '../pages/choose-profile.html';
    } else {
        alert('Login failed');
    }
});