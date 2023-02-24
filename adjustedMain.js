const ticTacToe = {
  winningConditions: ['123', '456', '789', '147', '258', '369', '159', '357'],
  positions: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  counter: 1,
  winner: false,
  players: {
    player1: [],
    player2: [],
  },
  checkForWin(str, arr) {
    for (const pattern of arr) {
      if (
        pattern.split('').every((letter) => {
          return str.includes(letter);
        })
      ) {
        return true;
      }
    }
  },
};

const container = document.querySelector('.container');
for (let i = 0; i < 9; i++) {
  const box = document.createElement('div');
  box.id = `${ticTacToe.positions[i]}`;
  box.classList.add('boxSize');
  container.append(box);
}

const boxes = document.querySelectorAll('div');
for (let box of boxes) {
  box.addEventListener('click', (e) => {
    if (!ticTacToe.winner) {
      if (ticTacToe.counter % 2 != 0) {
        if (!box.textContent) {
          box.textContent = 'x';
          ticTacToe.players.player1.push(e.target.id);
          if (
            ticTacToe.checkForWin(
              ticTacToe.players.player1.sort().join(''),
              ticTacToe.winningConditions
            )
          ) {
            alert('player1 wins');
            ticTacToe.winner = true;
          }
          ticTacToe.counter++;
        }
      } else if (ticTacToe.counter >= 9) {
        alert('draw');
        ticTacToe.winner = true;
      } else {
        if (!box.textContent) {
          box.textContent = 'O';
          ticTacToe.players.player2.push(e.target.id);
          if (
            ticTacToe.checkForWin(
              ticTacToe.players.player2.sort().join(''),
              ticTacToe.winningConditions
            )
          ) {
            alert('player2 wins');
            ticTacToe.winner = true;
          }
          ticTacToe.counter++;
        }
      }
    }
  });
}
