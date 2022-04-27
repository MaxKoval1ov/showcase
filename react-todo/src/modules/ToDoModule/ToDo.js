class ToDo {
    title;
    _id;
    completed;
    constructor(id, title, completed){
        this._id = id;
        this.title = title;
        this.completed = completed
    }
}

export default ToDo;