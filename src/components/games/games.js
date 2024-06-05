import React, { useState, useEffect } from 'react';
import './games.css';

const PLAYER_ONE = 'X';
const PLAYER_TWO = 'O';

const Games = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const getWinningCombination = (currentBoard) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return combination;
      }
    }
    return null;
  };

  const isWinningCell = (index) => {
    const winningCombination = getWinningCombination(board);
    return winningCombination && winningCombination.includes(index);
  };

  useEffect(() => {
    const checkWinner = (currentBoard) => {
      const winningCombination = getWinningCombination(currentBoard);
      return winningCombination ? currentBoard[winningCombination[0]] : null;
    };

    if (!gameOver) {
      const gameWinner = checkWinner(board);
      if (gameWinner) {
        setWinner(gameWinner);
        setGameOver(true);
        return;
      }

      if (board.every((cell) => cell !== '')) {
        setWinner('draw');
        setGameOver(true);
        return;
      }

      if (currentPlayer === PLAYER_TWO) {
        const availableMoves = board.reduce((acc, cell, index) => {
          if (!cell) acc.push(index);
          return acc;
        }, []);

        const winningMoves = [];
        const blockingMoves = [];
        const otherMoves = [];

        for (const move of availableMoves) {
          const newBoard = [...board];
          newBoard[move] = PLAYER_TWO;

          if (checkWinner(newBoard) === PLAYER_TWO) {
            winningMoves.push(move);
          } else {
            newBoard[move] = PLAYER_ONE;
            if (checkWinner(newBoard) === PLAYER_ONE) {
              blockingMoves.push(move);
            } else {
              otherMoves.push(move);
            }
          }
        }

        let selectedMove;

        if (winningMoves.length > 0) {
          selectedMove = winningMoves[Math.floor(Math.random() * winningMoves.length)];
        } else if (blockingMoves.length > 0) {
          selectedMove = blockingMoves[Math.floor(Math.random() * blockingMoves.length)];
        } else {
          selectedMove = otherMoves[Math.floor(Math.random() * otherMoves.length)];
        }

        setTimeout(() => {
          const newBoard = [...board];
          newBoard[selectedMove] = PLAYER_TWO;
          setBoard(newBoard);
          setCurrentPlayer(PLAYER_ONE);
        }, 300);
      }
    }
  }, [board, currentPlayer, gameOver]);

  const handleClick = (index) => {
    if (!gameOver && !board[index] && currentPlayer === PLAYER_ONE) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(PLAYER_TWO);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer(PLAYER_ONE);
    setWinner(null);
    setGameOver(false);
  };

  return (
    <section id="games">
      <h5>Let's Have Some Fun</h5>
      <h2>Tic Tac Toe</h2>

      <div className="tic-tac-toe">
        <div className="board">
          {board.map((cell, index) => (
            <div
              key={index}
              className={`cell ${cell} ${isWinningCell(index) ? 'winning' : ''}`}
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        {winner && (
          <div className="message">
            {winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`}
          </div>
        )}
        <div className="score">
          {/* Score display logic */}
        </div>
        {winner && (
          <button className="reset-button" onClick={resetGame}>
            Play Again
          </button>
        )}
      </div>
    </section>
  );
};

export default Games;
