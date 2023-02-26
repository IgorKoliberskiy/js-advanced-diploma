import GamePlay from "./GamePlay";
import GameState from './GameState';
import Team from './Team';
import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';
import Bowman from "./characters/Bowman";
import Swordsman from "./characters/Swordsman";
import Magician from "./characters/Magician";
import Vampire from "./characters/Vampire";
import Undead from "./characters/Undead";
import Daemon from "./characters/Daemon";

const playerTeamPositions = [];
const opposingTeamPositions = [];

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.gameState = new GameState();
    this.playerHeroes = [Bowman, Swordsman, Magician];
    this.opposingHeroes = [Vampire, Undead, Daemon];
    this.playerTeam = new Team();
    this.opposingTeam = new Team();
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi('prairie');
    this.playerTeam.addHeroes(generateTeam(this.playerHeroes, 1, 2));
    this.opposingTeam.addHeroes(generateTeam(this.opposingHeroes, 1, 2));
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
