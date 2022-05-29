import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  public static dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.attDwarfInstances();
  }

  public static attDwarfInstances(): number {
    this.dwarfInstances += 1;
    return this.dwarfInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    return this.dwarfInstances;
  }
}
