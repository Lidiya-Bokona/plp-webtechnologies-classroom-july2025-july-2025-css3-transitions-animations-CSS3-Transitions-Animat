const radiusValue = 7.5;

function getCircleArea(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

function showArea(radius) {
  const calculatedArea = getCircleArea(radius);
  const resultElement = document.getElementById('output');
  resultElement.textContent = `A circle with radius ${radius} has an area of ${calculatedArea.toFixed(2)}`;
}

document.getElementById('math-btn').addEventListener('click', () => {
  showArea(radiusValue);
});

function toggleBoxMovement() {
  const boxElement = document.getElementById('animated-box');
  boxElement.classList.toggle('move-box');
}

document.getElementById('move-btn').addEventListener('click', toggleBoxMovement);
