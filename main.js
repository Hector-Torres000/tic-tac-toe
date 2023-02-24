const container = document.querySelector('.container');

const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < 9; i++) {
  const box = document.createElement('div');
  box.id = `${positions[i]}`;
  box.classList.add('boxSize');
  container.append(box);
}

const winningConditions = [
  '123',
  '456',
  '789',
  '147',
  '258',
  '369',
  '159',
  '357',
];
let winner = false;
let counter = 1;
const obj = {
  player1: [],
  player2: [],
};
const boxes = document.querySelectorAll('div');
for (let box of boxes) {
  box.addEventListener('click', (e) => {
    if (!winner) {
      if (counter % 2 != 0) {
        if (!box.textContent) {
          box.textContent = 'x';
          obj.player1.push(e.target.id);
          if (checkForWin(obj.player1.sort().join(''), winningConditions)) {
            alert('player1 wins');
            winner = true;
          }
          counter++;
        }
      } else if (counter >= 9) {
        alert('draw');
        winner = true;
      } else {
        if (!box.textContent) {
          box.textContent = 'O';
          obj.player2.push(e.target.id);
          if (checkForWin(obj.player2.sort().join(''), winningConditions)) {
            alert('player2 wins');
            winner = true;
          }
          counter++;
        }
      }
    }
  });
}

function checkForWin(str, arr) {
  for (const pattern of arr) {
    if (
      pattern.split('').every((letter) => {
        return str.includes(letter);
      })
    ) {
      return true;
    }
  }
}
