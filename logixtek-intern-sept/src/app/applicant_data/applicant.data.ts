export class Applicant {
   id: number=0;
   name: string = '';
   applyFor: string = '';
   stage: string = '';
   email: string = '';
   phone: number = 0;
   psi: string = '';
   psd: string = '';

   constructor(id:number, name: string, applyFor: string, stage: string, email: string, phone: number, psi: string, psd: string) {
      this.id=id;
      this.name = name;
      this.applyFor = applyFor;
      this.stage = stage;
      this.email = email;
      this.phone;
      this.psi = psi;
      this.psd = psd;
   }

   onCreateApplicant(){
      this.id+=1;
   }
}
