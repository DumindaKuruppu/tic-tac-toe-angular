import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicTacToeBoardComponent } from "./tic-tac-toe-board/app.tic-tac-toe-board";
import { SampleComponent } from './sample/sample.component';
import {SampleService} from "./sample/sample.service";

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeBoardComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SampleService
    // Dependency injection
    // no matter how many components use this service, it will only be instantiated once
    // This is a singleton pattern
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
