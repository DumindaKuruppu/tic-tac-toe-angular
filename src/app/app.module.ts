import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicTacToeBoardComponent } from "./tic-tac-toe-board/app.tic-tac-toe-board";

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeBoardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
