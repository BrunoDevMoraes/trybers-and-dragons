import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private race: Race;
  private archetype: Archetype;
  private maxLifePoints: number;
  private lifePoints: number;
  private strength: number;
  private defense: number;
  private dexterity: number;
  private energy: Energy;

  constructor(name: string) {
    this.race = new Elf(name, 99);
    this.archetype = new Mage(name);
    this.maxLifePoints = (this.race.maxLifePoints / 2);
    this.lifePoints = this.maxLifePoints;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this.dexterity = this.race.dexterity;
    this.energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get getRace() {
    return this.race;
  }

  get getArchetype() {
    return this.archetype;
  }

  get getLifePoints() {
    return this.lifePoints;
  }

  get getStrength() {
    return this.strength;
  }

  get getDefense() {
    return this.defense;
  }

  get getDexterity() {
    return this.dexterity;
  }

  get getEnergy() {
    return { type_: this.energy.type_, amount: this.energy.amount };
  }

  receiveDamage(attackPoints: number) {
    if ((this.defense - attackPoints) < 0) {
      const damage = this.defense - attackPoints;
      const newLifePoints = this.lifePoints + damage;
      if (newLifePoints <= 0) {
        this.lifePoints = -1;
      }
    }
    return this.lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this.strength);
  }

  levelUp() {
    const randomInt = getRandomInt(1, 10);
    if ((this.maxLifePoints + randomInt) > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
    }
    this.maxLifePoints += randomInt;
    this.strength += getRandomInt(1, 10);
    this.defense += getRandomInt(1, 10);
    this.dexterity += getRandomInt(1, 10);
    this.energy.amount = 10;
    this.lifePoints = this.maxLifePoints;
  }

  special(enemy: Fighter) {
    enemy.receiveDamage(((this.strength) * 1.5));
  }
}