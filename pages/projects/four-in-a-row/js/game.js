const allRows = document.querySelectorAll(".row");
const allSlots = document.querySelectorAll(".slot");

const wrapper = document.querySelector('.wrapper');
const boardDiv = document.querySelector(".board");
const crossImg = document.querySelector(".cross");
const circleImg = document.querySelector(".circle");
const arrowHead = document.querySelector('.arrow');
const popUpDiv = document.querySelector('.pop-up-container');
const popUpText = document.querySelector('.pop-up-text');
const turnTextlabel = document.querySelector('.turn-text');
const usernameTextlabel = document.querySelector('.username-textlabel');
const popUpImage = document.querySelector('.pop-up-image');

const playAgainBtn = document.querySelector('.play-again');
const exitMenuBtn = document.querySelector('.exit-menu');

const backgroundAudio = document.querySelector('.background-audio');
const clickAudio = document.querySelector('.click-audio');
const hoverAudio = document.querySelector('.hover-audio');
const confettiAudio = document.querySelector('.confetti-audio');
const crowdAudio = document.querySelector('.crowd-audio');
const winAudio = document.querySelector('.win-audio');
const loseAudio = document.querySelector('.lose-audio');

const username = localStorage.getItem('username');

turnTextlabel.innerHTML = 'Turn: ' + username;
usernameTextlabel.innerHTML = username;

const slotSpaces = {};
const availableRows = {
  row0: allRows[0],
  row1: allRows[1],
  row2: allRows[2],
  row3: allRows[3],
  row4: allRows[4],
  row5: allRows[5],
  row6: allRows[6],
};

let currentImg = crossImg;
let playerTurn = true;
let gameEnded = false;

const delay = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const musicHandler = function () {
  try {
    if (document.hasFocus()) {
      backgroundAudio.play();
      backgroundAudio.loop = true;
      backgroundAudio.volume = .05;

      clickAudio.volume = .55;

      wrapper.removeEventListener('mouseover', musicHandler);
    }
  }
  catch (err) { }

};

const checkForWin = function (pos, type) {
  const maxHor = allRows[0].childElementCount - 1;
  const maxVert = boardDiv.childElementCount - 1;

  const horizontalPos = Number(pos[4]);
  const verticalPos = Number(pos[6]);

  const weHaveAWinner = function () {
    console.log("WINNER");

    gameEnded = true;

    if (type == 'cross') {
      popUpText.innerHTML = 'You win!';
      confettiAudio.play();
      crowdAudio.play();
      winAudio.play();
    } else {
      loseAudio.play();
      backgroundAudio.pause();
      popUpImage.src = '../imgs/crying.png';
    }

    popUpDiv.style.opacity = 1;
    popUpDiv.style['z-index'] = 10;
  };

  const checkSegments = async function (rightSegments, leftSegments, type, isSingle) {
    let matchingSlots = -1;
    if (isSingle === true) {
      matchingSlots++;
    }

    for (let index = 0; index < rightSegments.length; index++) {
      const value = rightSegments[index];
      const element = document.querySelector("." + value);

      await delay(50);

      setTimeout(() => {
        element.style.background = "#264653";
        element.style.height = "3.8vw";
        element.style.width = "3.8vw";
      }, 300);

      if (slotSpaces[value] == type) {
        element.style.height = "4vw";
        element.style.width = "4vw";

        element.style.background = "greenyellow";
        matchingSlots++;
      } else {
        element.style.background = "crimson";
        break;
      }
    }

    for (let index = 0; index < leftSegments.length; index++) {
      const value = leftSegments[index];
      const element = document.querySelector("." + value);

      await delay(50);

      setTimeout(() => {
        element.style.background = "#264653";
        element.style.height = "3.8vw";
        element.style.width = "3.8vw";
      }, 300);

      if (slotSpaces[value] == type) {
        element.style.height = "4vw";
        element.style.width = "4vw";
        element.style.background = "greenyellow";
        matchingSlots++;
      } else {
        element.style.background = "crimson";
        break;
      }
    }

    if (matchingSlots >= 4) {
      weHaveAWinner();
    }
  };

  const checkHorizontalSegments = function () {
    const rightTargetSlots = [];
    for (let index = 0; index < maxHor - horizontalPos + 1; index++) {
      rightTargetSlots.push("slot" + (horizontalPos + index) + "-" + verticalPos);
    }

    const leftTargetSlots = [];
    for (let index = 0; index < horizontalPos + 1; index++) {
      leftTargetSlots.push("slot" + (horizontalPos - index) + "-" + verticalPos);
    }

    checkSegments(rightTargetSlots, leftTargetSlots, type);
  };

  const checkVerticalSegments = function () {
    const rightTargetSlots = [];
    for (let index = 0; index < maxVert - verticalPos + 1; index++) {
      rightTargetSlots.push("slot" + horizontalPos + "-" + (verticalPos + index));
    }

    const leftTargetSlots = [];
    for (let index = 0; index < verticalPos + 1; index++) {
      leftTargetSlots.push("slot" + horizontalPos + "-" + (verticalPos - index));
    }

    checkSegments(rightTargetSlots, leftTargetSlots, type);
  };

  const checkDiagnalsRight = function () {
    const rightTargetSlots = [];
    for (let index = 0; index < 7; index++) {
      const value = "slot" + (horizontalPos + index) + "-" + (verticalPos + index);
      const element = document.querySelector("." + value);

      if (element != undefined) {
        rightTargetSlots.push(value);
      }
    }

    const leftTargetSlots = [];
    for (let index = 0; index < 7; index++) {
      const value = "slot" + (horizontalPos + index) + "-" + (verticalPos - index);
      const element = document.querySelector("." + value);

      if (element != undefined) {
        leftTargetSlots.push(value);
      }
    }

    checkSegments(rightTargetSlots, [], type, true);
    checkSegments([], leftTargetSlots, type, true);
  };

  const checkDiagnalsLeft = function () {
    const rightTargetSlots = [];
    for (let index = 0; index < 7; index++) {
      const value = "slot" + (horizontalPos - index) + "-" + (verticalPos + index);
      const element = document.querySelector("." + value);

      if (element != undefined) {
        rightTargetSlots.push(value);
      }
    }

    const leftTargetSlots = [];
    for (let index = 0; index < 7; index++) {
      const value = "slot" + (horizontalPos - index) + "-" + (verticalPos - index);
      const element = document.querySelector("." + value);

      if (element != undefined) {
        leftTargetSlots.push(value);
      }
    }

    checkSegments(rightTargetSlots, [], type, true);
    checkSegments([], leftTargetSlots, type, true);
  };

  checkHorizontalSegments();
  checkVerticalSegments();
  checkDiagnalsRight();
  checkDiagnalsLeft();
};

const switchArrow = function () {
  const currentClass = arrowHead.getAttribute("class");
  let rightOrLeft = "arrow";
  if (currentClass == "arrow") {
    rightOrLeft = "arrow right";
  }
  arrowHead.setAttribute("class", rightOrLeft);
};

const claimSlot = function (rowElement, isComputer) {
  if (!isComputer) {
    playerTurn = !playerTurn;
    turnTextlabel.innerHTML = 'Turn: A.I.';
  } else {
    turnTextlabel.innerHTML = 'Turn: ' + username;
    setTimeout(() => {
      playerTurn = !playerTurn;
    }, 500);
  }
  switchArrow();

  const rowChildren = rowElement.children;
  const slotDiv = rowElement.children[rowElement.getAttribute('stage')];

  console.log("claiming", slotDiv.getAttribute("class"), currentImg.getAttribute('class'));

  slotSpaces[slotDiv.getAttribute("class")] = currentImg.getAttribute("class");

  const clone = currentImg.cloneNode(true);
  clone.style.display = 'block';
  clone.setAttribute("class", "displayImg");
  slotDiv.appendChild(clone);

  currentImg.style.display = "none";

  checkForWin(slotDiv.getAttribute("class"), currentImg.getAttribute("class"));

  if (currentImg == crossImg) {
    currentImg = circleImg;
  }
  else {
    currentImg = crossImg;
  }

  if (rowElement.getAttribute('stage') > 0) {
    rowElement.setAttribute('stage', rowElement.getAttribute('stage') - 1);

    rowChildren[rowElement.getAttribute('stage')].appendChild(currentImg);
    currentImg.style.display = "block";
  } else {
    console.log("Deleting Full Row");
    rowElement.setAttribute('stage', rowElement.getAttribute('stage') - 1);
    delete availableRows[rowElement.getAttribute('class')];
  }
};

playAgainBtn.addEventListener('click', () => {
  clickAudio.play();
  setTimeout(() => {
    location.reload();
  }, 300);
});

exitMenuBtn.addEventListener('click', () => {
  clickAudio.play();
  setTimeout(() => {
    location.href = '../index.html';
  }, 300);
});

document.body.addEventListener('click', musicHandler);

for (let index = 0; index < allSlots.length; index++) {
  const element = allSlots[index];
  console.log(element);
}

for (let index1 = 0; index1 < allRows.length; index1++) {
  console.log('setting up');

  const rowElement = allRows[index1];
  const rowChildren = rowElement.children;

  rowElement.setAttribute('stage', rowChildren.length - 1);
  rowElement.setAttribute("class", "row" + index1);

  for (let index2 = 0; index2 < rowChildren.length; index2++) {
    const slotDiv = rowChildren[index2];
    const pos = "slot" + index1 + "-" + index2;

    slotDiv.setAttribute("class", pos);
    slotSpaces[pos] = false;
  }

  const onMouseOver = function () {
    if (playerTurn === false || rowElement.getAttribute('stage') === '-1') { return; }

    currentImg.style.display = "block";
    rowChildren[rowElement.getAttribute('stage')].appendChild(currentImg);
    try {
      hoverAudio.play();
    } catch (err) { }
  };

  const onMouseLeave = function () {
    if (playerTurn === false) { return; }

    currentImg.style.display = "none";
  };

  const getAvailableRow = function () {
    const rowValues = Object.values(availableRows);
    return rowValues[Math.floor(Math.random() * rowValues.length)];
  };

  const onClick = function (pointerEvent, setRow, isComputer) {
    if (gameEnded === true) {
      return;
    }

    const originalSetValue = setRow;

    if (playerTurn === false && setRow == undefined) {
      return;
    } else if (!setRow) {
      setRow = rowElement;
    }

    if (setRow.getAttribute('stage') === '0') {
      console.log("Disconnecting Events");

      setRow.removeEventListener("click", onClick);
      setRow.removeEventListener("mouseover", onMouseOver);
      setRow.removeEventListener("mouseleave", onMouseLeave);
    }

    clickAudio.play();
    claimSlot(setRow, isComputer);
    currentImg.style.display = "none";

    if (originalSetValue == undefined) {
      setTimeout(() => {
        onClick(undefined, getAvailableRow(), true);
      }, 500);
    }
  };

  rowElement.addEventListener("click", onClick);
  rowElement.addEventListener("mouseover", onMouseOver);
  rowElement.addEventListener("mouseleave", onMouseLeave);
}

