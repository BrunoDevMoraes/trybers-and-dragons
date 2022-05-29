import Archetype from './Archetypes';
import Energy from '../Energy';
import Race from '../Races';

export default class Warrior extends Archetype {
  public energy: Energy;
  public static numberOfWarriors = 0;

  constructor(name: string) {
    super(name);
    this.energy = { type_: 'stamina', amount: 100 };
    Warrior.attNumberOfWarriors();
  }

  public static createdArchetypeInstances() {
    return this.numberOfWarriors;
  }

  public get energyType() {
    return this.energy.type_;
  }

  private static attNumberOfWarriors() {
    this.numberOfWarriors += 1;
  }

  public attack(enemy: Race) {
    return `${this.name} is attacking ${enemy.name}`;
  }
}