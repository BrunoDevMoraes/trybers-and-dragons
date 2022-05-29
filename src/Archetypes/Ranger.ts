import Archetype from './Archetypes';
import Energy from '../Energy';
import Race from '../Races';

export default class Ranger extends Archetype {
  public energy: Energy;
  public static numberOfRangers = 0;

  constructor(name: string) {
    super(name);
    this.energy = { type_: 'stamina', amount: 100 };
    Ranger.attNumberOfRangers();
  }

  public static createdArchetypeInstances() {
    return this.numberOfRangers;
  }

  public get energyType() {
    return this.energy.type_;
  }

  private static attNumberOfRangers() {
    this.numberOfRangers += 1;
  }

  public attack(enemy: Race) {
    return `${this.name} is attacking ${enemy.name}`;
  }
}