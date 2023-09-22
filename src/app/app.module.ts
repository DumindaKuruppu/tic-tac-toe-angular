import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {SampleService} from "./sample/sample.service";
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TicTacToeComponent,
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
