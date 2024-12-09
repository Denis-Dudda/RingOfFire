import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatIconModule, MatButtonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string | undefined;
  game!: Game;
  constructor(){
    this.newGame();
  }

  newGame(){
    this.game = new Game ();
    console.log(this.game);
    
  }

  takeCard(){
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;

      console.log(this.game);
      console.log(this.game.playedCards);
      
      setTimeout(() => {
        if (this.currentCard) {
          this.game.playedCards.push(this.currentCard);  
        }
        this.pickCardAnimation = false;
      }, 1000);
    }      
    }

}
