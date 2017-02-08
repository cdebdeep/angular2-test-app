export class UserEntity {
    private id :number;
    private fname : string;
    private  lname :string;
    private  age :number;
    constructor(id:number,fname:string,lname:string,age:number){
        this.id=id;
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
}
