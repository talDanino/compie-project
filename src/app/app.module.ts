import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { GameButtonComponent } from './components/game-button/game-button.component';

import { GameStateService } from './services/game-state.service';
import { SharedService } from './services/shared.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    GameButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

  ],
  providers: [SharedService, GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
