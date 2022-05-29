import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  public static elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.attElfInstances();
  }

  public static attElfInstances(): number {
    this.elfInstances += 1;
    return this.elfInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    return this.elfInstances;
  }
}
