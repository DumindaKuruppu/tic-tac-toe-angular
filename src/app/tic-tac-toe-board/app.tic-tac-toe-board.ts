import { Component } from "@angular/core";

// Component Decorator
@Component({
  selector: 'app-tic-tac-toe-board',
  templateUrl: './app.tic-tac-toe-board.html',
  styleUrls: ['./app.tic-tac-toe-board.css']
})

export class TicTacToeBoardComponent {
  title = 'board component';
}
