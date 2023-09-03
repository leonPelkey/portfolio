const boxOne = document.querySelector('.js-box1');
const boxTwo = document.querySelector('.js-box2');
const boxThree = document.querySelector('.js-box3');
const boxFour = document.querySelector('.js-box4');
const boxFive = document.querySelector('.js-box5');
const boxSix = document.querySelector('.js-box6');
const boxSeven = document.querySelector('.js-box7');
const boxEight = document.querySelector('.js-box8');
const boxNine = document.querySelector('.js-box9');

boxOne.addEventListener('click', () => {
  playGame('.js-box1', boxOne);
});

boxTwo.addEventListener('click', () => {
  playGame('.js-box2', boxTwo);
});

boxThree.addEventListener('click', () => {
  playGame('.js-box3', boxThree);
});

boxFour.addEventListener('click', () => {
  playGame('.js-box4', boxFour);
});

boxFive.addEventListener('click', () => {
  playGame('.js-box5', boxFive);
});

boxSix.addEventListener('click', () => {
  playGame('.js-box6', boxSix);
});

boxSeven.addEventListener('click', () => {
  playGame('.js-box7', boxSeven);
});

boxEight.addEventListener('click', () => {
  playGame('.js-box8', boxEight);
});

boxNine.addEventListener('click', () => {
  playGame('.js-box9', boxNine);
});

const playGame = (boxSpace, boxTag) => {
  if (document.querySelector(boxSpace).innerHTML  === '') {
    document.querySelector(boxSpace).innerHTML = 'X';
    boxTag.classList.add('choice-x');
  } else if (document.querySelector(boxSpace).innerHTML === 'X') {
    document.querySelector(boxSpace).innerHTML = 'O';
    boxTag.classList.remove('choice-x');
    boxTag.classList.add('choice-o');
  } else if (document.querySelector(boxSpace).innerHTML === 'O') {
    document.querySelector(boxSpace).innerHTML = '';
    boxTag.classList.remove('choice-o');
  }
}