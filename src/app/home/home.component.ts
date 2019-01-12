import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';
import {HomeService} from "./home.service";
import {MatSelectionListChange} from '@angular/material';

@Component({
  selector: 'todo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeList : TodoItem[] = [];
  selectedItems: string[] = [];
  newItem : string;
  ngOnInit(){

  }
  addItem(){
    this.todoService.addItem(this.newItem);
    this.newItem = '';
  }

  onSelectionChanged(event: MatSelectionListChange) {
    this.selectedItems = event.source.selectedOptions.selected.map(a => String(a.getLabel()));
  }

  // find out which boxes are checked, and then call this method for each one
  removeItem(){
    // for each item in array
    for(var i = 0; i < this.selectedItems.length; i++){
      this.todoService.removeItemByName(this.selectedItems[i]);
    }
    this.selectedItems = [];
  }

  constructor(private todoService: HomeService) {
      this.activeList = todoService.getProducts();
  }

}
