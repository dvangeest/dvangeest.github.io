const root = document.querySelector(':root');

const headerContainer = document.querySelector('.header-container');
const exampleModal = document.querySelector('.example-modal')
const projectContainers = document.querySelectorAll('.project-container');

const modalProjectData = [
    {
        title: 'Four in a Row',
        description: `
        The Four in a Row project was initially a school-assigned task, inspired by the classic game of Tic-Tac-Toe but with an added challenge of achieving four consecutive markers in a row. This project was developed using HTML, CSS, and JavaScript, combining various techniques and methods to create an engaging and interactive gaming experience.
        <br><br>
        Upon entering the page, users were greeted with a form to insert their username, which was then stored in the browser's local storage. This feature ensured that the username would persist across sessions and be displayed on the actual game page, providing a personalized touch for the players.
        <br><br>
        The game page featured a 7x7 grid layout, created using HTML and CSS Grid. This grid served as the playing field for the Four in a Row game, allowing users to strategically place their "X" markers. The use of CSS transitions provided smooth and animated effects during gameplay, enhancing the overall user experience.
        <br><br>
        To facilitate user interaction, the project employed hover events and click events in JavaScript. These events allowed players to preview their moves by highlighting the respective row when hovering over it and to make their selection by clicking on the desired row. This interactivity provided visual feedback, aiding users in making informed decisions.
        <br><br>
        The primary objective of the game was to achieve four markers in a row. JavaScript logic was implemented to detect and validate winning conditions, ensuring that the game accurately determined a winner. Upon successful completion, players were presented with a winner screen, displaying a congratulatory message and providing options to play again or return to the main menu.
        <br><br>
        In addition to the user-player experience, the project incorporated an automated AI opponent. The AI opponent randomly placed its markers on a tile within the grid, providing a challenging element to the game. This feature was implemented using JavaScript and allowed users to play against the computer when desired.
        <br><br>
        Throughout the project, I gained valuable knowledge and skills in web development. I learned to utilize local storage to store user information, ensuring a personalized experience. Additionally, I gained proficiency in working with viewport sizes, hover events, click events, and animated CSS transitions, which enhanced the visual appeal and interactivity of the game.
        <br><br>
        The project also deepened my understanding of grid layout, allowing me to create dynamic and responsive game boards. Furthermore, I developed logic and algorithms to handle winning conditions and implement an AI opponent, further expanding my problem-solving capabilities.
        <br><br>
        Overall, this project served as an opportunity for me to apply HTML, CSS, and JavaScript to create an engaging and interactive Four in a Row game. It provided me with hands-on experience in web development techniques, taught me the significance of user experience, and expanded my knowledge of JavaScript functionalities. The project fostered my growth as a software developer and prepared me for future challenges in building dynamic web applications.
        `,
        img: 'img/four-in-a-row.png',
        repo: 'https://github.com/ROCMondriaanTIN/sd22-project-p02-boter-kaas-en-eieren-dvangeest.git',
        demo: 'pages/projects/four-in-a-row/index.html',
    },
    {
        title: 'Streaming Service',
        description: `
        The Streaming Service project was a school-assigned task that allowed freedom in choosing the project scope as long as it could be completed within a week. The website was inspired by popular streaming platforms like Netflix and Zoro.to, and aimed to provide users with a seamless streaming experience. The project was developed using HTML, CSS, and JavaScript, incorporating various methods and techniques to create a user-friendly and visually appealing streaming service.
        <br><br>
        Upon entering the website for the first time, users were prompted to create an account, while returning users had the option to log in. The user account information was stored in the browser's local storage, enabling personalized experiences across sessions. Users were able to create multiple profiles, similar to Netflix, and customize their profile icons using the keyboard.
        <br><br>
        After logging in, users were directed to the Discover page, which served as the landing page for exploring available shows. The top-ranked show was prominently highlighted as a big card, grabbing users' attention. Below the highlighted show, users could find various categories such as Trending, Top Airing, and more. These categories were dynamically displayed using JavaScript and local storage, ensuring an up-to-date and customizable experience for users.
        <br><br>
        When users clicked on a show, an overlay transitioned onto the Discover page, providing detailed information about the show, including its description, title, genres, studio, producer, and total episodes. This overlay was created using HTML, CSS transitions, and JavaScript, allowing users to get a glimpse of the show's content without leaving the Discover page.
        <br><br>
        Upon selecting the play button, users were redirected to the video player page. The video player page featured a placeholder video, comments section, episodes list, and information about the specific season and episode. The video player and its functionalities were implemented using JavaScript, providing users with a seamless streaming experience within the website.
        <br><br>
        Throughout the project, various techniques were utilized to enhance the user experience. CSS transitions were applied to create smooth animations and visual effects, adding polish to the overall website design. Grid layouts were implemented on the wrapper element to ensure responsiveness across different screen sizes, allowing users to enjoy the streaming service on various devices.
        <br><br>
        Although the project focused on local storage and did not involve an actual web server, it provided an opportunity to explore the cosmetic aspects of building a streaming service website. By implementing user accounts, profile customization, show discovery, and a video player, the project simulated the core functionalities of a streaming platform.
        <br><br>
        Overall, this project allowed me to apply HTML, CSS, and JavaScript to create a user-friendly streaming service website. It provided valuable experience in using local storage for personalized user accounts, implementing responsive grid layouts, creating interactive overlays, and developing a video player. Through this project, I deepened my understanding of front-end web development and gained insights into the complexities of building a streaming service platform.
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
        The Escape Room project was a collaborative effort among myself and two classmates, where we developed an immersive 2D web game using HTML, CSS, and JavaScript. Inspired by the anime "Death Parade," the game aimed to provide players with a captivating storyline, visually appealing graphics, and challenging puzzles. Throughout the development process, we utilized various methods and techniques to create an engaging and immersive escape room experience.
        <br><br>
        Upon entering the game, players were welcomed into the quindecim, a virtual bar setting, where they encountered the bartender character, Decim. Decim explained the situation and outlined the game's rules and circumstances. These instructions included important details such as the inability to know the location, the upcoming game, the availability of five lives, the stake of lives in the game, and the restriction from leaving the bar until the game's completion. This narrative setup added suspense and intrigue, immersing players in the game's atmosphere.
        <br><br>
        The gameplay revolved around solving puzzles and riddles to progress through the narrative and escape the room. The first puzzle challenged players to decipher a password by using provided colors and their corresponding priorities. For example, green had the highest priority (1), followed by red (2), blue (3), orange (4), grey (5), and yellow (6). By understanding the color-priority relationship, players needed to input the correct code sequence to advance. This puzzle tested players' observation and logical thinking skills.
        <br><br>
        The second puzzle introduced a 3x3 grid that players had to solve by moving puzzle pieces around until they formed a complete picture. This grid puzzle required strategic thinking and spatial awareness, challenging players to rearrange the pieces in the correct order to progress further in the game.
        <br><br>
        The final puzzle presented a riddle that required players to find a 10-digit number. Each digit represented the count of a specific number in the entire sequence. For instance, the first digit represented the count of zeros, the second digit represented the count of ones, and so on, until the tenth digit represented the count of nines. Players had to analyze and solve the riddle to identify the correct number sequence.
        <br><br>
        Our collaborative effort in developing this escape room web game showcased our skills in web development and storytelling. We effectively utilized HTML, CSS, and JavaScript to create an engaging and interactive experience for players. The game's visual elements, animations, and user interactions were enhanced through CSS transitions, click events, hover events, and grid layouts. Local storage was utilized to store and retrieve game progress, allowing players to continue their adventure from where they left off.
        <br><br>
        Overall, this project provided us with valuable experience in designing and implementing a captivating escape room game using HTML, CSS, and JavaScript. Through our collaboration, we strengthened our web development skills, honed our problem-solving abilities, and demonstrated our ability to create an immersive and enjoyable gaming experience for players.`,
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







