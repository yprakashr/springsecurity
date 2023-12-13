export class User{

    public id: number;
    public firstname!: string;
    public lastname!: string;
    public email: string;
    public password: string;
    public authStatus : string;

    constructor(id?: number,firstname?: string, lastname?: string, email?: string,  password?: string,authStatus?:string){
          this.id = id || 0;
          this.firstname = this.firstname || '';
          this.lastname = this.lastname || '';
          this.email = email || '';
          this.password = password || '';
          this.authStatus = authStatus || '';
    }  
  }