import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    playerName: String;

    constructor(private router:Router,
                private sharedService:SharedService) { }

    ngOnInit(): void {
    }

    go(playerName) {
        //return this.playerName;
        this.playerName=playerName
        console.log("playerName: ",playerName);
        console.log("this.playerName: ",this.playerName);
        this.sharedService.setPlayerName(this.playerName);
        this.router.navigate(['/game']); // navigate to other page
    }

}
