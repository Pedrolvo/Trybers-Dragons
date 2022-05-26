import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private player1: Fighter;
  private player2: Fighter;
  constructor(character1: Fighter, character2: Fighter) {
    super(character1);
    this.player1 = character1;
    this.player2 = character2;
  }

  fight(): number {
    const { player1, player2 } = this;
    while (player1.lifePoints > 0 && player2.lifePoints > 0) {
      player1.attack(player2);
      player2.attack(player1);
    }
    return super.fight();
  }
}

export default PVP;