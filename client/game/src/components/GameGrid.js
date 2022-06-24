import React, { useState } from "react";
import '../styles/GameGrid.css'
import Square from "./Square.js";




const GameGrid = ({ num }) => {

  let gridWidth = num;
  let gridHeight = num;
  let numOfMines = num;
  let grid = [];

  //add list of adjacent nodes to reveal what is underneath the button to the obj pushed to grid

  for (let i = 0; i < gridHeight; i++) {
    grid.push([]);
    for (let j = 0; j < gridWidth; j++) {
      grid[i].push({ bomb: 0, adjacentBombs: 0 });
    }
  }

  while (numOfMines > 0) {
    let randomX = Math.floor(Math.random() * num);
    let randomY = Math.floor(Math.random() * num);
    if (grid[randomX][randomY].bomb === 0) {
      grid[randomX][randomY].bomb = 1
      numOfMines--;
    }
  }



  //USE THIS TO BUILD THE ADJACENT NODE LIST
  //...figure out the logic but this is the way
  const handleAdjacent = (x, y) => {
      if (y === 0) {
        if (grid[x][y + 1].bomb === 1) {
          grid[x][y].adjacentBombs = grid[x][y].adjacentBombs + 1;
          //ADD this node to the node list..
        }
        if (x + 1 < num) {
          if (grid[x+1][y + 1].bomb === 1 && y !== num) {
            grid[x][y].adjacentBombs  += 1;
            //add this node to the node list...
          }
          if (grid[x+1][y].bomb === 1 && y !== num) {
            grid[x][y].adjacentBombs  += 1;
          }
        }
        if (x !== 0) {
          if (grid[x-1][y + 1].bomb === 1 && y !== num) {
            grid[x][y].adjacentBombs  += 1;
          }
          if (grid[x-1][y].bomb === 1 && y !== num) {
            grid[x][y].adjacentBombs  += 1;
          }
        }
      }
      else if (y === num -1) {
        if (grid[x][y - 1].bomb === 1) {
          grid[x][y].adjacentBombs = grid[x][y].adjacentBombs + 1;
        }
         if (x + 1 < num) {
          if (grid[x+1][y - 1].bomb === 1) {
            grid[x][y].adjacentBombs  += 1;
          }
          if (grid[x+1][y].bomb === 1 && y !== num) {
            grid[x][y].adjacentBombs  += 1;
          }
        }
        if (x !== 0) {
          if (grid[x-1][y - 1].bomb === 1) {
            grid[x][y].adjacentBombs  += 1;
          }
          if (grid[x-1][y].bomb === 1 && y !== num) {
            grid[x][y].adjacentBombs  += 1;
          }
        }
      } else {

        if (grid[x][y - 1].bomb === 1) {
          grid[x][y].adjacentBombs += 1;
        }
        if (grid[x][y + 1].bomb === 1 && y !== num) {
          grid[x][y].adjacentBombs  += 1;
        }
        if (x + 1 < num) {
          if (grid[x+1][y - 1].bomb === 1) {
            grid[x][y].adjacentBombs  += 1;
          }
          if (grid[x+1][y + 1].bomb === 1 && y !== num) {
            grid[x][y].adjacentBombs  += 1;
          }
          if (grid[x+1][y].bomb === 1 && y !== num) {
            grid[x][y].adjacentBombs  += 1;
          }
        }
        if (x !== 0) {
          if (grid[x-1][y - 1].bomb === 1) {
            grid[x][y].adjacentBombs  += 1;
          }
          if (grid[x-1][y + 1].bomb === 1 && y !== num) {
            grid[x][y].adjacentBombs  += 1;
          }
          if (grid[x-1][y].bomb === 1 && y !== num) {
            grid[x][y].adjacentBombs  += 1;
          }
        }
      }
    }

  const checkAll = (funky) => {
    for (let i = 0; i < grid.length; i++ ) {
      for (let j = 0; j < grid[i].length; j++) {
        funky(i,j)
      }
    }
  }

  checkAll( handleAdjacent)

  return (
    <table>
      <tbody>
        {
          grid.map((row, rowIndex) => (<tr key={rowIndex}>{row.map((cell, cellIndex) => {
            if (cell.bomb === 0) {
              return <Square key={cellIndex} cell={cell} index={[rowIndex, cellIndex]} classy='zero' />

            } else {
              return <Square key={cellIndex} cell={cell} index={[rowIndex, cellIndex]} classy='one' />
            }
          })}</tr>))
        }
      </tbody>
    </table>
  );

}

export default GameGrid;


  // const handleAdjacent = (arr, x, y, checkProp, changeProp) => {
  //     if (y === 0) {
  //       if (arr[x][y + 1].checkProp === 1) {
  //         arr[x][y].changeProp = arr[x][y].changeProp + 1;
  //       }
  //       if (x + 1 < arr.length) {
  //         if (arr[x+1][y + 1].checkProp === 1 && y !== arr.length) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //         if (arr[x+1][y].checkProp === 1 && y !== arr.length) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //       }
  //       if (x !== 0) {
  //         if (arr[x-1][y + 1].checkProp === 1 && y !== arr.length) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //         if (arr[x-1][y].checkProp === 1 && y !== arr.length) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //       }
  //     }
  //     else if (y === arr.length -1) {
  //       if (arr[x][y - 1].checkProp === 1) {
  //         arr[x][y].changeProp = arr[x][y].changeProp + 1;
  //       }
  //        if (x + 1 < arr.length) {
  //         if (arr[x+1][y - 1].checkProp === 1) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //         if (arr[x+1][y].checkProp === 1 && y !== arr.length) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //       }
  //       if (x !== 0) {
  //         if (arr[x-1][y - 1].checkProp === 1) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //         if (arr[x-1][y].checkProp === 1 && y !== arr.length) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //       }
  //     } else {

  //       if (arr[x][y - 1].checkProp === 1) {
  //         arr[x][y].changeProp += 1;
  //       }
  //       if (arr[x][y + 1].checkProp === 1 && y !== arr.length) {
  //         arr[x][y].changeProp  += 1;
  //       }
  //       if (x + 1 < arr.length) {
  //         if (arr[x+1][y - 1].checkProp === 1) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //         if (arr[x+1][y + 1].checkProp === 1 && y !== arr.length) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //         if (arr[x+1][y].checkProp === 1 && y !== arr.length) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //       }
  //       if (x !== 0) {
  //         if (arr[x-1][y - 1].checkProp === 1) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //         if (arr[x-1][y + 1].checkProp === 1 && y !== arr.length) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //         if (arr[x-1][y].checkProp === 1 && y !== arr.length) {
  //           arr[x][y].changeProp  += 1;
  //         }
  //       }
  //     }
  //   }