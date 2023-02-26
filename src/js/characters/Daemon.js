import Character from '../Character';

export default class Daemon extends Character {
  constructor(level) {
    super(level, 'daemom');
    this.attack = 10;
    this.defence = 10;
  }
}
