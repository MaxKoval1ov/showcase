export class Task{
    userId: number;
    title: string;
    _id!:string;
    completed: boolean;
    constructor(userId:number, title:string, completed:boolean){
        this.userId = userId;
        this.title = title;
        this.completed = completed;
    }
}