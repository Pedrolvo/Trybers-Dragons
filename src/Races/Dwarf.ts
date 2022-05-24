import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;
    Dwarf._dwarfInstances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._dwarfInstances;
  }
}

export default Dwarf;