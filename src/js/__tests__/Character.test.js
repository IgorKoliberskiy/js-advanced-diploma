import Character from '../Character';
import Bowman from '../characters/Bowman';

test('Создание объекта этого класса через new Character(level)', () => {
  expect(() => new Character(1)).toThrow('Создавать объекты этого класса через new Character(level) запрещено, но при этом разрешено создание наследников');
});
test('Создание наследников', () => {
  expect(new Bowman(1)).toEqual({ attack: 25, defence: 25, health: 50, level: 1, type: 'bowman' });
});
