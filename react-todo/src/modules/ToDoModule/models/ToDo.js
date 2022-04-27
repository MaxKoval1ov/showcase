export default class Task{
    userId;
    title;
    _id;
    completed;
    constructor(userId, title, completed){
        this.userId = userId;
        this.title = title;
        this.completed = completed;
    }
}