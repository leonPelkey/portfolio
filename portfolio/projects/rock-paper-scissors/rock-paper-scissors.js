let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;


function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1500)
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('Rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('Paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('Scissors')
  });

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    document.querySelector('.js-message-container')
      .innerHTML = `<p>Are you sure you want to reset the game?</p>
      <button onclick="
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
        document.querySelector('.js-message-container')
          .innerHTML = '';
      " class="magic-button">Yes</button>
      <button onclick="
        document.querySelector('.js-message-container')
          .innerHTML = '';
      " class="magic-button">No</button>`
  });

  

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace'){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  }
});

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    if (document.querySelector('.js-auto-play-button')
          .innerHTML === 'Auto Play') {
        document.querySelector('.js-auto-play-button')
          .innerHTML = 'Stop Playing';
      } else {
        document.querySelector('.js-auto-play-button')
          .innerHTML = 'Auto Play';
      }
      autoPlay()
  });

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'a'){
      autoPlay();
    }
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('Rock');
  } else if (event.key === 'p') {
    playGame('Paper');
  } else if (event.key === 's') {
    playGame('Scissors');
  }
});

function playGame (playerMove) {
const computerMove = pickComputerMove();

let result = '';



if (playerMove === 'Scissors') {
  if (computerMove === 'Rock') {
    result = 'You Lose!';
  } else if (computerMove === 'Paper') {
    result = 'You Win!';
  } else if (computerMove === 'Scissors') {
    result = 'Tie Game!';
  }

} else if (playerMove === 'Paper') {
  if (computerMove === 'Rock') {
    result = 'You Win!';
  } else if (computerMove === 'Paper') {
    result = 'Tie Game!';
  } else if (computerMove === 'Scissors') {
    result = 'You Lose!';
  }
  
} else if (playerMove === 'Rock') {
  if (computerMove === 'Rock') {
    result = 'Tie Game!';
  } else if (computerMove === 'Paper') {
    result = 'You Lose!';
  } else if (computerMove === 'Scissors') {
    result = 'You Win!';
  }
}

if (result === 'You Win!') {
  score.wins += 1;
} else if (result === 'You Lose!') {
  score.losses += 1;
} else if (result === 'Tie Game!') {
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-moves').innerHTML = `You picked <img src="images/${playerMove}-emoji.png" class="move-icon"> 
Computer picked <img src="images/${computerMove}-emoji.png" class="move-icon">`;

document.querySelector('.js-result').innerHTML = result;
}

function updateScoreElement() {
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'Rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'Paper';
} else {
  computerMove = 'Scissors';
}

return computerMove;
}