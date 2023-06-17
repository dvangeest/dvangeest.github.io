const headerDiv = document.querySelector('.main-hd');
const videoInfoOverlay = document.querySelector('.overlay');
const accountIcon = document.querySelector('.account-icon');

const moreInfoBtn = document.querySelector('.more-info-btn');
const closeBtn = document.querySelector('.close-btn');

const allSliderDivs = document.querySelectorAll('.slider-content');

// Titles for horizontal and vertical posters
const horizontalTitles = [
    'Bleach',
    'Cyberpunk: Edgerunners',
    'Devilman Crybaby',
    'Dr. Stone',
    'Fate/Stay Night',
    'Fate/Stay Night: Unlimited Blade Works',
    'Jujutsu Kaisen',
    'Fire Force',
];

const verticalTitles = [
    'Attack on Titan',
    'Black Lagoon',
    'Bleach',
    'Blue Lock',
    'Chainsaw Man',
    'Death Note',
    'Jujutsu Kaisen',
    'One Piece',
    'Tokyo Ghoul',
];

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

accountIcon.textContent = localStorage.getItem('icon'); // set account icon text

// Loop through all slider divs
for (let index = 0; index < allSliderDivs.length; index++) {
    const parent = allSliderDivs[index];
    const item = parent.children[0]; // grab template to clone (video item)

    for (let i = 0; i < 5; i++) {
        const clone = item.cloneNode(true); // clone the template (video item)
        const title = item.children[1].children[0]; // grab title element
        const cover = item.children[0]; // grab cover element
        let topIcon
        if (cover.children[0] && cover.children[0].children[0]) { // check if top icon exists
            topIcon = cover.children[0].children[0]; // grab top icon element
            topIcon.textContent = '0'+(i+2); // set top icon text
        }

        const type = item.parentNode.parentNode.parentNode.parentNode.classList.contains('horizontal'); // check if slider is horizontal or vertical
        let showType = verticalTitles[getRandomNumber(0, horizontalTitles.length - 1)];
        let posterAxis = 'vertical';
        if (type === true) {
            posterAxis = 'horizontal';
            showType = horizontalTitles[getRandomNumber(0, horizontalTitles.length - 1)];
        }

        // Replace all non-alphanumeric characters with dashes and convert to lowercase
        showType = showType.replace(/[^a-zA-Z0-9.]/g, '-').toLowerCase();
        cover.style.background = `url(../img/${posterAxis}-posters/${showType}.png) no-repeat center center / cover`;

        //Turn dashes into spaces and capitalize the first letter of each word
        title.innerHTML = showType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

        clone.addEventListener('click', function () {
            videoInfoOverlay.classList.remove('close'); // remove close class to show overlay
            document.body.classList.add('no-scroll'); // disable scroll on body
        
            videoInfoOverlay.style['z-index'] = 100; // set z-index to 100 to show overlay
        });

        parent.appendChild(clone); // append the clone to the parent (slider content)
        clone.classList.remove('hidden'); // remove hidden class to show video item
    }
}


moreInfoBtn.addEventListener('click', function () {
    videoInfoOverlay.classList.remove('close'); // remove close class to show overlay
    document.body.classList.add('no-scroll'); // disable scroll on body

    videoInfoOverlay.style['z-index'] = 100; // set z-index to 100 to show overlay
})

closeBtn.addEventListener('click', function () {
    videoInfoOverlay.classList.add('close'); // add close class to hide overlay

    setTimeout(() => {
        document.body.classList.remove('no-scroll'); // enable scroll on body
        videoInfoOverlay.style['z-index'] = -100; // set z-index to -100 to hide overlay
    }, 500); // wait for animation to finish
})

window.addEventListener("scroll", function () {
    if (window.pageYOffset < 0.2) {
        headerDiv.classList.remove('solidify'); // remove solidify class to make header transparent
    } else {
        headerDiv.classList.add('solidify'); // add solidify class to make header solid
    }
});