import * as uuid from 'uuid';

export class TodoItem {
    id: string;
    text: string;
    constructor(id:string){
      this.id = uuid.v4();
      this.text = name;
    }
  }
