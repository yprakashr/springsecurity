export class User {
  public id: number;
  public fullname: string;
  public username: string;
  public phone: string;
  public gender: string;
  public password: string;
  public email: string;


  constructor(
    id?: number,
    fullname?: string,
    username?: string,
    phone?: string,

    gender?: string,
    password?: string,
    email?: string,

  ) {
    this.id = id || 0;
    this.fullname = fullname || '';
    this.username = username || '';
    this.phone = phone || '';
    this.password = password || '';
    this.gender = gender || '';

    this.email = email || '';

  }
}
