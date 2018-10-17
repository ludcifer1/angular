export class Position {
  private Id: number;
  private Name: string;

  constructor(id: number, Name: string) {
    this.Id = id;
    this.Name = Name;
  }

  public get getId(): number {
    return this.Id;
  }

  public get getName(): string {
    return this.Name;
  }

  public set setId(id: number) {
    this.Id = id;
  }

  public set setApplyForName(name: string) {
    this.Name = name;
  }
}
