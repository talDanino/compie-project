import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { COLORS, START_COUTNT } from '../models/constants';


@Injectable({
  providedIn: 'root'
})
export class GameStateService {

    count: number;
    simon: string[] =[];
    player: string[] = [];
    state = new Subject<any>();

    constructor() { 
        this.count = START_COUTNT;
    }


    //-------- SIMON
    private get randomColor(): string {
        return COLORS[Math.floor(Math.random() * 6)];
    }

    appendSimon(increment: boolean = false): void {
        if (increment) {
            //this.count++;
            this.count=this.count+10;
        }
        this.simon.push(this.randomColor);
    }

    generateSimon(): string[] {
        this.simon = [];
        for (let i = 0; i< this.count; i++) {
            this.appendSimon();
        }
        
        this.setState();
        return this.simon;
    }

    restartSimon(): string[] {
        this.count = START_COUTNT;
        return this.generateSimon();
    }

    //-------- PLAYER
    playerGuess(val: string) {
        this.player.push(val);
        if (!this.compareSimon()) {
            this.player = [];
            this.restartSimon();
        }

        this.setState();
    }
    

    compareSimon(): boolean {
        for (let i = 0; i < this.player.length; i++) {
            if(this.player[i] !== this.simon[i]) {
                return false;
            }
        }

        if (this.player.length === this.simon.length){
            this.updateGame();
        }
        return true;
    }

    updateGame() {
        this.appendSimon(true);
        this.player = [];
    }

    setState() {
        this.state.next({
            player: this.player,
            simon: this.simon,
            count: this.count
        });
    }
}
