import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  public static orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.attOrcInstances();
  }

  public static attOrcInstances(): number {
    this.orcInstances += 1;
    return this.orcInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    return this.orcInstances;
  }
}
