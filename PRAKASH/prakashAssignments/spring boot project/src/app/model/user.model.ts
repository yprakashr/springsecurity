
export class User{

  public id: number;
  public fullName: string;
  public phoneno: string;
  public age : string;
  public gender: string;
  public date: string;
  public time: string;



  constructor(id?: number,fullName?: string, phoneno?: string, age?: string,  gender?: string,date?: string,
    time?:string){
        this.id = id || 0;
        this.fullName = fullName || '';
        this.phoneno = phoneno || '';
        this.age = age || '';
        this.gender = gender || '';
        this.date = date || '';
        this.time = time || '';

  }

}
