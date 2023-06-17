//body had transition value in css file making the body fade in and out without any js animation code

const transitionOut = function () {
    document.body.style.opacity = 0;
    document.body.style['background-color'] = '#202125';
}

const transitionIn = function () {
    document.body.style.opacity = 1;

    if (document.body.getAttribute('ignore')) {
        return;
    }

    setTimeout(() => {
        document.body.style['background-color'] = '#CAE962';
    }, 400);
}

//fetch all elemetns with attribute named 'redirect'
const redirectElements = document.querySelectorAll('[redirect]');

setTimeout(() => {
    transitionIn(); //transition in when loading page
}, 300);

redirectElements.forEach(element => {
    //when clicked, transition out and redirect to the url specified in the 'redirect' attribute
    element.addEventListener('click', () => {
        transitionOut();
        setTimeout(() => {
            //redirect="pages/login.html" also consider in the current directory
            location.href = element.getAttribute('redirect');
        }, 500);
    })
});