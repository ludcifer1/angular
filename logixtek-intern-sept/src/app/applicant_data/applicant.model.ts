export class Applicant {
   id = 0;
   name = '';
   applyFor = '';
   stage = '';
   email = '';
   phone = '';
   psi = '';
   psd = '';

   constructor(name: string, applyFor: string, stage: string, email: string, phone: string, psi: string, psd: string) {
      this.name = name;
      this.applyFor = applyFor;
      this.stage = stage;
      this.email = email;
      this.phone = phone;
      this.psi = psi;
      this.psd = psd;
   }
}
