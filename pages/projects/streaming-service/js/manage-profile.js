const iconInput = document.querySelector('.icon-input');
const nameInput = document.querySelector('.name');

const doneBtn = document.querySelector('.manage-profiles-btn');

iconInput.addEventListener('focusin', () => {
    iconInput.style.background = 'url()';
});

iconInput.addEventListener('focusout', () => {
    iconInput.style.background = " rgba(0, 0, 0, 0.5) url('../img/icons/pencil.png') no-repeat center center / contain";
});

doneBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const icon = iconInput.value;

    if (nameInput.value == '' || iconInput.value == '') {
        alert("You can not leave the forms empty!");

        return;
    } 

    if (iconInput.value.length > 1) {
        alert("You can only use one character for your icon!");

        return;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('icon', icon);

    location.href = '../pages/choose-profile.html';
});