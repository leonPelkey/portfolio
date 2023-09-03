let colorName = document.getElementById('color-name');

function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  colors = `#${randColor.toUpperCase()}`;
  document.body.style.backgroundColor = colors;
  colorName.innerHTML = colors;
}

const button = document.getElementById('js-button');

button.addEventListener('click', () => {
  generateRandomColor();
});

generateRandomColor();



