import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  public static halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.attHalflingInstances();
  }

  public static attHalflingInstances(): number {
    this.halflingInstances += 1;
    return this.halflingInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    return this.halflingInstances;
  }
}
