import { Component, OnInit } from '@angular/core';
import {tick} from "@angular/core/testing";

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  board: any[][];
  currentPlayer: string;
  heading: string;

  constructor() {
    this.board = this.generateBoard(3);
    this.currentPlayer = "X";
    this.heading = "Tic-Tac-Toe";
  }

  ngOnInit(): void {
  }

  generateBoard(size: number): any[][] {
    const board = [];
    for (let i = 0; i < size; i++) {
      board.push([...Array(size)]);
    }
    return board;
  }

  checkHorizontalWin(board: any[]): boolean {
    for (const row of board) {
      const rowSet = new Set(row); // Set is a collection of unique values
      if (rowSet.size === 1 && !rowSet.has(undefined)) {
        return true;
      }
    }
    return false;
  }

  rowsToColumn(board: any): any[][] {
    const newBoard = [];
    let column = 0;
    while (column < board[0].length) {
      const newRow = [];
      for (let row = 0; row < board.length; row++) {
        newRow.push(board[row][column]);
      }
      newBoard.push(newRow);
      column++;
    }
    return newBoard;
  }

  diagonalToRow(board: any): any[][] {
    const newBoard: any = [[], []];
    let increment = 0;
    let decrement = board.length - 1;

    while (increment < board.length) {
      newBoard[0].push(board[increment][increment]);
      newBoard[1].push(board[increment][decrement]);
      increment++;
      decrement++;
    }
    return newBoard;
  }

  checkForWin(board: any): boolean {
    // Horizontal win
    if (this.checkHorizontalWin(board)) {
      return true;
    }

    // Vertical Win
    if (this.checkHorizontalWin(this.rowsToColumn(board))) {
      return true;
    }

    // Diagonal Win
    if (this.checkHorizontalWin(this.diagonalToRow(board))) {
      return true;
    }

    return false;
  }

  handleClick(r: number, c: number): void {
    this.board[r][c] = this.currentPlayer;
    if (this.checkForWin(this.board)) {
      document.title = `${this.currentPlayer} Wins !`;
      this.heading = `${this.currentPlayer} Wins !`;
      this.board = this.generateBoard(3);
      this.currentPlayer = "X";
    } else {
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }
  }

  protected readonly tick = tick;
}
