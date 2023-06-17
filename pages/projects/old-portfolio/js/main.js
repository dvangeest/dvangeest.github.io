const menuContainerDiv = document.querySelector('.menu-container');
const menuOverlayDiv = document.querySelector('.menu-overlay');

menuContainerDiv.addEventListener('click', function() {
    menuOverlayDiv.classList.toggle('show');
    menuContainerDiv.classList.toggle('change');
})