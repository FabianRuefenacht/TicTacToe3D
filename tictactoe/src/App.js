import './App.css';
import React, { useState } from 'react';

function App() {
  /*defining states*/
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [squares] = useState(Array(64).fill(''));
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);
  const Tiechecker = Array(0)

  /*What happens after Clicking a Tile*/
  function handleClick(i) {
    if (squares[i] === '') {
      squares[i] = currentPlayer
    } else {
      return
    }

    checkWin(squares);
  }

  /*Checking for winner*/
  function checkWin(squares) {
    /*Check for row-win*/
    for (let idx = 0; idx < 64; idx += 4) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 1] &&
        squares[idx] === squares[idx + 2] &&
        squares[idx] === squares[idx + 3]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for col-win Layer1*/
    for (let idx = 0; idx < 4; idx += 1) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 4] &&
        squares[idx] === squares[idx + 8] &&
        squares[idx] === squares[idx + 12]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for col-win Layer2*/
    for (let idx = 16; idx < 20; idx += 1) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 4] &&
        squares[idx] === squares[idx + 8] &&
        squares[idx] === squares[idx + 12]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for col-win Layer3*/
    for (let idx = 32; idx < 36; idx += 1) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 4] &&
        squares[idx] === squares[idx + 8] &&
        squares[idx] === squares[idx + 12]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for col-win Layer4*/
    for (let idx = 48; idx < 52; idx += 1) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 4] &&
        squares[idx] === squares[idx + 8] &&
        squares[idx] === squares[idx + 12]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for win on diagonal on XY-Layer TL-BR*/
    for (let idx = 0; idx < 49; idx += 16) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 5] &&
        squares[idx] === squares[idx + 10] &&
        squares[idx] === squares[idx + 15]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for win on diagonal on XY-Layer TR-BL*/
    for (let idx = 3; idx < 52; idx += 16) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 3] &&
        squares[idx] === squares[idx + 6] &&
        squares[idx] === squares[idx + 9]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for staple-win*/
    for (let idx = 0; idx < 16; idx += 1) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 16] &&
        squares[idx] === squares[idx + 32] &&
        squares[idx] === squares[idx + 48]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for diag-win 0 51, 12 63*/
    for (let idx = 0; idx < 13; idx += 4) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 17] &&
        squares[idx] === squares[idx + 34] &&
        squares[idx] === squares[idx + 51]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for diag-win 3 48, 15 60*/
    for (let idx = 3; idx < 16; idx += 4) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 15] &&
        squares[idx] === squares[idx + 30] &&
        squares[idx] === squares[idx + 45]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for diag-win 0 60, 3 63*/
    for (let idx = 0; idx < 4; idx += 1) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 20] &&
        squares[idx] === squares[idx + 40] &&
        squares[idx] === squares[idx + 60]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for diag-win 12 48, 15 51*/
    for (let idx = 12; idx < 16; idx += 1) {
      if (
        squares[idx] &&
        squares[idx] === squares[idx + 12] &&
        squares[idx] === squares[idx + 24] &&
        squares[idx] === squares[idx + 36]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    /*Check for room-diag-win 0 63*/
    if (
      squares[0] &&
      squares[0] === squares[21] &&
      squares[0] === squares[42] &&
      squares[0] === squares[63]
    ) {
      setWinner(currentPlayer);
      return;
    }
    /*Check for room-diag-win 12 51*/
    if (
      squares[12] &&
      squares[12] === squares[25] &&
      squares[12] === squares[38] &&
      squares[12] === squares[51]
    ) {
      setWinner(currentPlayer);
      return;
    }
    /*Check tie*/
    for (let idx = 0; idx < 64; idx++) {
      if (squares[idx] === '') {
        Tiechecker.push(idx)
      }
    }
    if (Tiechecker.length===0) {
      setTie(true);
      return;
    }

    /*if no winner was found, Player gets swapped*/

    if (winner === null) {
      if (currentPlayer === 'X') {
        setCurrentPlayer('O');
      } else {
        setCurrentPlayer('X')
      }
    }
  }

  return (
    <div className="App">
      {tie === true &&
        <div>It's a tie.</div>
      }
      {winner === null && tie === false &&
        <div>Next move: {currentPlayer}</div>
      }
      {winner !== null && tie === false &&
        <div>{currentPlayer} won!</div>}
      <div className='layer'>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(0)}>{squares[0]}</div>
          <div className='cell' onClick={() => handleClick(1)}>{squares[1]}</div>
          <div className='cell' onClick={() => handleClick(2)}>{squares[2]}</div>
          <div className='cell' onClick={() => handleClick(3)}>{squares[3]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(4)}>{squares[4]}</div>
          <div className='cell' onClick={() => handleClick(5)}>{squares[5]}</div>
          <div className='cell' onClick={() => handleClick(6)}>{squares[6]}</div>
          <div className='cell' onClick={() => handleClick(7)}>{squares[7]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(8)}>{squares[8]}</div>
          <div className='cell' onClick={() => handleClick(9)}>{squares[9]}</div>
          <div className='cell' onClick={() => handleClick(10)}>{squares[10]}</div>
          <div className='cell' onClick={() => handleClick(11)}>{squares[11]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(12)}>{squares[12]}</div>
          <div className='cell' onClick={() => handleClick(13)}>{squares[13]}</div>
          <div className='cell' onClick={() => handleClick(14)}>{squares[14]}</div>
          <div className='cell' onClick={() => handleClick(15)}>{squares[15]}</div>
        </div>
      </div>
      <div className='layer'>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(16)}>{squares[16]}</div>
          <div className='cell' onClick={() => handleClick(17)}>{squares[17]}</div>
          <div className='cell' onClick={() => handleClick(18)}>{squares[18]}</div>
          <div className='cell' onClick={() => handleClick(19)}>{squares[19]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(20)}>{squares[20]}</div>
          <div className='cell' onClick={() => handleClick(21)}>{squares[21]}</div>
          <div className='cell' onClick={() => handleClick(22)}>{squares[22]}</div>
          <div className='cell' onClick={() => handleClick(23)}>{squares[23]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(24)}>{squares[24]}</div>
          <div className='cell' onClick={() => handleClick(25)}>{squares[25]}</div>
          <div className='cell' onClick={() => handleClick(26)}>{squares[26]}</div>
          <div className='cell' onClick={() => handleClick(27)}>{squares[27]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(28)}>{squares[28]}</div>
          <div className='cell' onClick={() => handleClick(29)}>{squares[29]}</div>
          <div className='cell' onClick={() => handleClick(30)}>{squares[30]}</div>
          <div className='cell' onClick={() => handleClick(31)}>{squares[31]}</div>
        </div>
      </div>
      <div className='layer'>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(32)}>{squares[32]}</div>
          <div className='cell' onClick={() => handleClick(33)}>{squares[33]}</div>
          <div className='cell' onClick={() => handleClick(34)}>{squares[34]}</div>
          <div className='cell' onClick={() => handleClick(35)}>{squares[35]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(36)}>{squares[36]}</div>
          <div className='cell' onClick={() => handleClick(37)}>{squares[37]}</div>
          <div className='cell' onClick={() => handleClick(38)}>{squares[38]}</div>
          <div className='cell' onClick={() => handleClick(39)}>{squares[39]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(40)}>{squares[40]}</div>
          <div className='cell' onClick={() => handleClick(41)}>{squares[41]}</div>
          <div className='cell' onClick={() => handleClick(42)}>{squares[42]}</div>
          <div className='cell' onClick={() => handleClick(43)}>{squares[43]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(44)}>{squares[44]}</div>
          <div className='cell' onClick={() => handleClick(45)}>{squares[45]}</div>
          <div className='cell' onClick={() => handleClick(46)}>{squares[46]}</div>
          <div className='cell' onClick={() => handleClick(47)}>{squares[47]}</div>
        </div>
      </div>
      <div className='layer'>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(48)}>{squares[48]}</div>
          <div className='cell' onClick={() => handleClick(49)}>{squares[49]}</div>
          <div className='cell' onClick={() => handleClick(50)}>{squares[50]}</div>
          <div className='cell' onClick={() => handleClick(51)}>{squares[51]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(52)}>{squares[52]}</div>
          <div className='cell' onClick={() => handleClick(53)}>{squares[53]}</div>
          <div className='cell' onClick={() => handleClick(54)}>{squares[54]}</div>
          <div className='cell' onClick={() => handleClick(55)}>{squares[55]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(56)}>{squares[56]}</div>
          <div className='cell' onClick={() => handleClick(57)}>{squares[57]}</div>
          <div className='cell' onClick={() => handleClick(58)}>{squares[58]}</div>
          <div className='cell' onClick={() => handleClick(59)}>{squares[59]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={() => handleClick(60)}>{squares[60]}</div>
          <div className='cell' onClick={() => handleClick(61)}>{squares[61]}</div>
          <div className='cell' onClick={() => handleClick(62)}>{squares[62]}</div>
          <div className='cell' onClick={() => handleClick(63)}>{squares[63]}</div>
        </div>
      </div>
    </div>
  );
}

export default App;