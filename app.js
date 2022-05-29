const colors = [
  'green',
  'red',
  'black',
  'gray',
  'purple',
  'fuchsia',
  'lime',
  'yellow',
  'blue',
  'teal',
  'orange',
  'blueviolet',
  'brown',
  'coral',
  'cornflowerblue',
  'darkblue',
  'hotpink',
  'indianred',
  'yellowgreen',
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
