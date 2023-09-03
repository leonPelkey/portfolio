
let colorName = document.getElementById('color-name');

const colors = ['#ecf0f1', '#e74c3c', 'rgb(230, 126, 34)', '#f1c40f', 'rgb(39, 174, 96)', '#3498db', 'rgb(142, 68, 173)'];

let arrayIndex = 0;

document.body.style.backgroundColor = colors[arrayIndex];
colorName.innerHTML = colors[arrayIndex].toUpperCase();

const button = document.getElementById('js-button');

button.addEventListener('click', () => {
  if (arrayIndex === colors.length - 1) {
    arrayIndex = 0;
    document.body.style.backgroundColor = colors[arrayIndex];
    colorName.innerHTML = colors[arrayIndex].toUpperCase();
  } else{
    arrayIndex++;
    document.body.style.backgroundColor = colors[arrayIndex];
    colorName.innerHTML = colors[arrayIndex].toUpperCase();
  }
});



