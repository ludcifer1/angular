import { Stage } from "./stage.model";
import { Position } from "./position.model";

export class Applicant {
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(
    private _id: number,
    private _firstName: string,
    private _lastName: string,
    private _applyFor: Position,
    private _stage: Stage,
    private _emailAddress: string,
    private _phone: string,
    private _phoneScreenInterviewer: string,
    private _phoneScreenDate: Date
  ) {}

  public static toJson(value: any, id?: number) {
    const jsonData = {
      Id: id !== undefined ? id : 0,
      FirstName: value.FirstName,
      LastName: value.LastName,
      ApplyforId: value.applyFor,
      StageId: value.stage,
      Email: value.email,
      Phone: value.phone,
      PhoneScreenInterviewer: value.psi,
      PhoneScreenDate: value.psd,
      Applyfor: null,
      Stage: null
    };

    return jsonData;
  }

  // ================================================
  // =              GETTERS & SETTERS               =
  // ================================================

  public get getId(): number {
    return this._id;
  }

  public get getIdToString(): string {
    return this._id.toString();
  }

  public get getName(): string {
    return this._firstName + " " + this._lastName;
  }

  public get getFirstName(): string {
    return this._firstName;
  }

  public get getLastName(): string {
    return this._lastName;
  }

  public get getApplyFor(): Position {
    return this._applyFor;
  }

  public get getApplyForToString(): string {
    return this._applyFor.getName;
  }

  public get getStage(): Stage {
    return this._stage;
  }

  public get getStageToString(): string {
    return this._stage.getName;
  }

  public get getEmailAddress(): string {
    return this._emailAddress;
  }

  public get getPhone(): string {
    return this._phone;
  }

  public get getPhoneScreenInterviewer(): string {
    return this._phoneScreenInterviewer;
  }

  public get getPhoneScreenDate(): Date {
    return this._phoneScreenDate;
  }

  public get getPhoneScreenDateToString(): string {
    if (this._phoneScreenDate == null) {
      return "";
    }
    return (
      this._phoneScreenDate.getFullYear() +
      "-" +
      (this._phoneScreenDate.getMonth() + 1) +
      "-" +
      this._phoneScreenDate.getDate()
    );
  }

  public set setId(id: number) {
    this._id = id;
  }

  public set setFirstName(firstName: string) {
    this._firstName = firstName;
  }

  public set setLastName(lastName: string) {
    this._lastName = lastName;
  }

  public set setApplyFor(applyFor: Position) {
    this._applyFor = applyFor;
  }
  // public set setApplyForFromNumber(applyFor : number) {
  //   switch(applyFor){

  //   }
  //   this._applyFor = applyFor;
  // }
  public set setStage(stage: Stage) {
    this._stage = stage;
  }
  // public set setStageFromNumber(stage : number) {
  //   this._stage = stage;
  // }
  public set setEmailAddress(emailAddress: string) {
    this._emailAddress = emailAddress;
  }
  public set setPhone(phone: string) {
    this._phone = phone;
  }
  public set setPhoneScreenInterviewer(phoneScreenInterviewer: string) {
    this._phoneScreenInterviewer = phoneScreenInterviewer;
  }
  public set setPhoneScreenDate(phoneScreenDate: Date) {
    this._phoneScreenDate = phoneScreenDate;
  }

  public set setPhoneScreenDateFromString(phoneScreenDate: string) {
    const infos = phoneScreenDate.split("-");
    const year = Number(infos[0]);
    const month = Number(infos[1]);
    const day = Number(infos[2]);
    this._phoneScreenDate.setDate(day);
    this._phoneScreenDate.setMonth(month - 1);
    this._phoneScreenDate.setFullYear(year);
  }
}
