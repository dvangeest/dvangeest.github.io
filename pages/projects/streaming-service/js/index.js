const loginBtn = document.querySelector('.sign-up-btn');

const emailInput = document.querySelector('.input-1');
const passwordInput = document.querySelector('.input-2');
const dayInput = document.querySelector('.day-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');

if (localStorage.length === 0) { // if local storage is empty set default data
    localStorage.setItem('name', 'John Doe');
    localStorage.setItem('icon', 'A');
    localStorage.setItem('stay-logged', 'false');
}

if (localStorage.getItem('remember') === 'true') { // if user clicked remember me on login page then redirect to discovery page
    location.href = 'pages/discovery.html';
}

loginBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;

    if (email === '' || password === '' || day === '' || month === '' || year === '') {
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

    // Date validation
    if (day < 1 || day > 31) {
        alert('Day must be between 1 and 31');

        return;
    } else if (month < 1 || month > 12) {
        alert('Month must be between 1 and 12');

        return;
    } else if (year < 1900 || year > 2023) {
        alert('Year must be between 1900 and 2023');

        return;
    } else {
        //alert('Date is valid');
    }

    // Save data to local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('day', day);
    localStorage.setItem('month', month);
    localStorage.setItem('year', year);

    alert('Account created successfully!');

    location.href = '../pages/login.html';
})