import Archetype from './Archetypes';
import Energy from '../Energy';
import Race from '../Races';

export default class Mage extends Archetype {
  public energy: Energy;
  public static numberOfMages = 0;

  constructor(name: string) {
    super(name);
    this.energy = { type_: 'mana', amount: 100 };
    Mage.attNumberOfMages();
  }

  public static createdArchetypeInstances() {
    return this.numberOfMages;
  }

  public get energyType() {
    return this.energy.type_;
  }

  private static attNumberOfMages() {
    this.numberOfMages += 1;
  }

  public attack(enemy: Race) {
    return `${this.name} is attacking ${enemy.name}`;
  }
}