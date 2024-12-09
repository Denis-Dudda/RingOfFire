import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatIconModule, MatButtonModule, DialogAddPlayerComponent, MatDialogModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string | undefined;
  game!: Game;


  constructor(public dialog: MatDialog){
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


    openDialog(): void {
      const dialogRef = this.dialog.open(DialogAddPlayerComponent); 
      
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result !== undefined) {
          console.log('das result ist ' + result);
          
        }
      });
    }
}
