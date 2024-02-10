import { Component } from '@angular/core';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
})
export class RockComponent {
  player1Score: number = 0;
  player2Score: number = 0;

  player1Move: string = '';
  player1Win: boolean = false;
  player1Lose: boolean = false;

  player2Move: string = '';
  player2Win: boolean = false;
  player2Lose: boolean = false;

  tied: boolean = false;

  animationsPlaying: boolean = false;

  get statusText() {
    if (!this.player1Move) {
      return 'Choose your move!';
    } else if (this.tied) {
      return 'Tie!';
    } else if (this.player1Lose) {
      return 'You lost!';
    } else {
      return 'You won!';
    }
  }

  async move(move: string) {
    this.animationsPlaying = true;
    await this.reset();

    const moves = ['gem', 'scissors', 'paper-plane'];
    const player1 = moves.indexOf(move);
    const player2 = Math.floor(Math.random() * 3);

    this.player1Move = `fa-${moves[player1]}`;
    this.player2Move = `fa-${moves[player2]}`;

    if (player1 === player2) {
      this.tie();
    } else if ((player1 + 1) % 3 === player2) {
      this.win();
    } else {
      this.lose();
    }

    setTimeout(
      () => {
        this.animationsPlaying = false;
      },
      player1 === player2 ? 500 : 2000
    );
  }

  setGameState(
    player1Win: boolean,
    player1Lose: boolean,
    player2Win: boolean,
    player2Lose: boolean,
    tied: boolean
  ) {
    this.player1Win = player1Win;
    this.player1Lose = player1Lose;
    this.player2Win = player2Win;
    this.player2Lose = player2Lose;
    this.tied = tied;
  }

  async reset() {
    this.player1Move = '';
    this.player2Move = '';
    this.setGameState(false, false, false, false, false);
  }

  win() {
    this.setGameState(true, false, false, true, false);
    this.player1Score++;
  }
  lose() {
    this.setGameState(false, true, true, false, false);
    this.player2Score++;
  }
  tie() {
    this.setGameState(false, false, false, false, true);
  }
}
