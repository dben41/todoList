import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  todoCollection: TodoItem[];
  constructor() {
    this.todoCollection = [
      {id: '1', text: 'eat breakfast'},
      {id: '2', text: 'get dressed'},
      {id: '3', text: 'brush teeth'}
    ];
  }

  getProducts(): TodoItem[] {
    return this.todoCollection;
  }

  addItem(newItem: string){
    this.todoCollection.push({id: '4' , text: newItem});
  }

  removeItemByName(text: string){
    // var id = this.todoCollection.find(entry => entry.text == text).;
    var index = this.todoCollection.findIndex(entry => entry.text === text);
    this.todoCollection.splice(index,1);
  }


}
