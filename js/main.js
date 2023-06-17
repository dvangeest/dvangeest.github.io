const root = document.querySelector(':root');

const headerContainer = document.querySelector('.header-container');
const exampleModal = document.querySelector('.example-modal')
const projectContainers = document.querySelectorAll('.project-container');

const modalProjectData = [
    {
        title: 'Four in a Row',
        description: `
            I created a challenging version of Tic Tac Toe called "Four in a Row" using HTML, CSS, and JavaScript.
            <br><br>
            Originally designed for Player vs. Player, I added an AI opponent for a higher grade. The computer's moves were randomized, making the game unpredictable and engaging.
            <br><br>
            The interface was user-friendly, displaying the current player's turn, name and the game result. It was an opportunity to showcase my skills in web development and strategic thinking.
        `,
        img: 'img/four-in-a-row.png',
        repo: 'https://github.com/ROCMondriaanTIN/sd22-project-p02-boter-kaas-en-eieren-dvangeest.git',
        demo: 'pages/projects/four-in-a-row/index.html',
    },
    {
        title: 'Streaming Service',
        description: `
        For my solo school project, I created a streaming service website within a week. The website allowed users to create an account, log in, and browse a library of shows for streaming. Due to limitations, the actual streaming functionality was simulated using placeholder videos instead of sourcing real shows.
        <br><br>
        I developed the project using HTML, CSS, and JavaScript, showcasing my proficiency in these web technologies. The user interface was carefully designed to provide a visually appealing and intuitive experience. I focused on optimizing the navigation flow and ensuring a seamless user journey throughout the website.
        <br><br>
        To handle user accounts, I implemented a login system using JavaScript, where user information was securely stored in the browser's local storage. As a result, the login functionality did not send data to a server but provided a simulated user authentication experience.
        <br><br>
        Given the time constraints, I prioritized essential features and functionalities to deliver a functional website within the given timeframe. The project demonstrated my ability to work independently and create a streaming service website, complete with user account functionality.
        <br><br>
        Overall, this solo project highlighted my proficiency in HTML, CSS, and JavaScript, as well as my ability to develop a streaming service website with user account management. While actual streaming was not available, the project provided users with an immersive experience using placeholder videos and showcased my skills in web development and rapid project execution.
        `,
        img: 'img/steaming-service.jpeg',
        repo: 'https://github.com/ROCMondriaanTIN/sd22-themaweek-2-t1k-dvangeest.git',
        demo: 'pages/projects/streaming-service/index.html',
    },
    {
        title: 'Attack on Titan: Evolution (Roblox)',
        description: `
        "Attack on Titan: Evolution" was a highly anticipated Roblox game based on the popular anime series "Attack on Titan" (AoT). Developed by a team of approximately six developers, including myself as an assistant programmer and responsible for the User Interface (UI), the project spanned over a period of two years.
        <br><br>
        Our goal was to create an immersive gaming experience that captured the essence and thrilling gameplay of the Attack on Titan universe. With meticulous attention to detail, we crafted a world where players could assume the role of Scouts, don their Omni-Directional Mobility Gear, and engage in high-flying battles against the towering Titans.
        <br><br>
        Throughout the development process, my primary focus was on implementing intuitive and visually appealing UI elements. I worked closely with the team to ensure a seamless integration of UI components, including menus, health bars, map displays, and player interactions. By designing a user-friendly interface, we aimed to enhance player immersion and facilitate seamless gameplay.
        <br><br>
        After two years of dedicated work, "Attack on Titan: Evolution" was successfully released to the Roblox platform. The game garnered positive feedback from the community, drawing in a substantial player base and fostering an active community of fans.
        <br><br>
        However, as time went on, our team's interest and priorities shifted, prompting us to make the decision to sell the game to "Boss Studio." This allowed us to pursue new ventures and projects that aligned more closely with our evolving interests and aspirations.
        <br><br>
        Overall, the development of "Attack on Titan: Evolution" was an exhilarating journey, marked by collaboration, creativity, and a deep passion for the Attack on Titan anime. As an assistant programmer and UI specialist, I played a crucial role in creating an immersive user experience. The success and subsequent sale of the game demonstrated our team's dedication, talent, and adaptability in the dynamic world of Roblox game development.
        `,
        img: 'img/aote-banner.png',
        demo: 'https://www.roblox.com/games/7127407851/',
    },
    {
        title: 'Uno (Roblox)',
        description: `
        Following the success of "Attack on Titan: Evolution" on Roblox, I embarked on creating an exciting and immersive Roblox Uno game. This 3D adaptation of the classic card game aimed to provide a fun and engaging multiplayer experience for up to 16 players.
        <br><br>
        The game featured the traditional Uno gameplay, where players take turns matching colors or numbers to get rid of their cards. I incorporated interactive 3D elements to enhance the visual appeal and bring the game to life within the Roblox platform.
        <br><br>
        In addition to the traditional Uno mode, I introduced custom game modes to add variety and excitement. One such mode was "Wild West," a unique twist on Uno with a deck full of custom wild cards. This mode added a new layer of strategy and unpredictability, giving players a fresh and thrilling Uno experience.
        <br><br>
        Throughout the development process, I focused on ensuring smooth gameplay and intuitive controls. Players could easily navigate the 3D environment, interact with cards, and enjoy a seamless multiplayer experience with friends or other Roblox users.
        `,
        img: 'img/placeholder.jpeg',
        demo: 'https://www.roblox.com/games/13244479228/',
    },
    {
        title: 'Escape Room',
        description: `
        In a group project with two classmates, we developed a captivating 2D Escape Room web game using HTML, CSS, and JavaScript. 
        <br><br>
        Inspired by the anime "Death Parade," the game featured a compelling storyline and immersive visuals. 
        <br><br>
        Players had to solve puzzles and riddles to progress through the narrative and escape the room. Our collaboration showcased our skills in web development and storytelling, creating an engaging experience for players.
        `,
        img: 'img/escape-room.jpeg',
        repo: 'https://github.com/dvangeest/escape-room.git',
        demo: 'pages/projects/escape-room/index.html',
    },
    {
        title: 'Old Portfolio',
        description: `
            I created my first portfolio website using HTML, CSS, and JavaScript. The website showcased my skills in web development and design, providing a visually appealing and intuitive user experience.
            <br><br>
            The website featured a responsive design, allowing users to access the website on any device.
        `,
        img: 'img/old-portfolio.png',
        repo: 'https://github.com/ROCMondriaanTIN/sd22-design-p2-portfolio-dvangeest.git',
        demo: 'pages/projects/old-portfolio/index.html',
    },
    {
        title: 'Higher Lower',
        description: `
        As my first school project, I developed a web-based game called "Higher Lower" that aimed to provide a simple and entertaining experience. The game was designed using HTML, CSS, and JavaScript, with my limited knowledge in these technologies at the time.
        <br><br>
        The objective of the game was straightforward: players started with a set amount of credits that they could bet. The computer would roll their dice, and then the player had to predict whether their own dice roll would be higher or lower. Alternatively, players had the option to draw for a potentially higher reward, but with increased risk.
        <br><br>
        As my first project, "Higher Lower" was a stepping stone in my journey as a developer. It provided valuable hands-on experience in HTML, CSS, and JavaScript while introducing me to the process of designing and implementing a web-based game. While simple in nature, the project allowed me to explore the fundamentals of web development and gain a foundation for future projects.
        `,
        img: 'img/higher-lower.png',
        repo: 'https://github.com/dvangeest/higher-lower.git',
        demo: 'pages/projects/higher-lower/index.html',
    },
]

let projectDataIndex = 0

root.setAttribute('style', 'scroll-behavior: auto;')
setTimeout(function () {
    window.scrollBy(0, -2000);

    root.removeAttribute("style");
}, 0)

for (let index = 0; index < projectContainers.length; index++) {
    const projectContainer = projectContainers[index];

    for (let i = 0; i < 2; i++) {
        const projectData = modalProjectData[projectDataIndex];

        if (projectData === undefined) break;

        projectContainer.innerHTML += `
            <div class="card rounded btn btn-info bg-light-purple text-light" type="button" data-bs-toggle="modal"
                data-bs-target="#modal0" data-bs-index="${projectDataIndex}">
                <img class="card-img-top img-fluid" src="${projectData.img}" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">${projectData.title}</h4>
                </div>
            </div>
        `;

        projectDataIndex++;
    }
}

exampleModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget
    const recipient = button.getAttribute('data-bs-index')
    const projectData = modalProjectData[recipient];

    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalDescription = exampleModal.querySelector('.modal-description')
    const modalPlayBtn = exampleModal.querySelector('.modal-play-btn')
    const modalRepoBtn = exampleModal.querySelector('.modal-repo-btn')

    if (projectData.demo === undefined) {
        modalPlayBtn.classList.add('d-none');
    } else {
        modalPlayBtn.classList.remove('d-none');
        modalPlayBtn.setAttribute('href', projectData.demo);
    }

    if (projectData.repo === undefined) {
        modalRepoBtn.classList.add('d-none');
    } else {
        modalRepoBtn.classList.remove('d-none');
        modalRepoBtn.setAttribute('href', projectData.repo);
    }

    modalTitle.textContent = projectData.title
    modalDescription.innerHTML = projectData.description
})

let lastKnownScrollPosition = window.scrollY;;
document.addEventListener("scroll", (event) => {
    //check if lastKnownScrollPosition is greater than the current scroll position
    if (lastKnownScrollPosition > window.scrollY) {
        //scrolling up
        headerContainer.classList.remove('hide');
    } else {
        //scrolling down
        headerContainer.classList.add('hide');
    }

    lastKnownScrollPosition = window.scrollY;
});


document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling when a link is clicked
    const allSections = document.querySelectorAll('section');
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allSections.forEach((section) => {
        section.setAttribute('scroll-pos', section.offsetTop);
    });

    allLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = link.getAttribute('href');
            if (target === '#') return;

            const targetSection = document.getElementById(target.replace('#', ''));
            const targetSectionPos = targetSection.getAttribute('scroll-pos');

            event.preventDefault();

            window.scrollTo({
                top: targetSectionPos,
                behavior: 'smooth',
            });
        });
    });
});







