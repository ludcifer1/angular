export class Stage {
  id: number;
  stageName: string;

  constructor(id: number, stageName: string) {
    if (id === null) {
      this.id = 1;
    } else {
      this.id = id;
    }
    this.stageName = stageName;
  }
  public get getId(): number {
    return this.id;
  }

  public get getName(): string {
    return this.stageName;
  }

  public set setId(id: number) {
    if (id === null) {
      this.id = 1;
    } else {
      this.id = id;
    }
  }

  public set setStageName(name: string) {
    this.stageName = name;
  }
}
