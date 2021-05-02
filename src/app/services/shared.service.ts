import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

    playerName:string;

    constructor() { }

    setPlayerName(data) {
        this.playerName=data;
    }
    getPlayerName(){
        return this.playerName;
    }
}
