import { Component, Input, OnInit } from '@angular/core';
import { GameStateService } from 'src/app/services/game-state.service';
import { SharedService } from '../../services/shared.service';
import { sleep } from '../../models/constants';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    playerName: String;
    count: number;
    colors: any = {
        red: false,
        blue: false,
        green: false,
        yellow: false,
        purple: false
    };

    constructor( private sharedService:SharedService,
                private gameStateService: GameStateService ) { }


    ngOnInit() {
        this.playerName = this.sharedService.getPlayerName();

        this.gameStateService.state.subscribe(state => {
            console.log(state);
            if (this.count != state.count){
                this.count = state.count;
                this.teasePlayer(state.simon);
            }
            
        });
        this.gameStateService.generateSimon();
    }


    playerGuess(e: string) {
        this.gameStateService.playerGuess(e);
    }

    async teasePlayer(simon: string[]) {
        for(let i = 0; i < simon.length; i++){
            this.colors[simon[i]] = true;
            await sleep(500);
            this.colors[simon[i]] = false;
            await sleep(200);
        }
    }
   
}
