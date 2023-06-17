const iconDiv = document.querySelector('.icon-container').children[0]; // grab icon element
const nameDiv = document.querySelector('.name'); // grab name element

iconDiv.textContent = localStorage.getItem('icon'); // set account icon text
nameDiv.textContent = localStorage.getItem('name'); // set account name text