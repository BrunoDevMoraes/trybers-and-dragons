import Archetype from './Archetypes';
import Energy from '../Energy';
import Race from '../Races';

export default class Necromancer extends Archetype {
  public energy: Energy;
  public static numberOfNecromancers = 0;

  constructor(name: string) {
    super(name);
    this.energy = { type_: 'mana', amount: 100 };
    Necromancer.attNumberOfNecromancers();
  }

  public static createdArchetypeInstances() {
    return this.numberOfNecromancers;
  }

  public get energyType() {
    return this.energy.type_;
  }

  private static attNumberOfNecromancers() {
    this.numberOfNecromancers += 1;
  }

  public attack(enemy: Race) {
    return `${this.name} is attacking ${enemy.name}`;
  }
}