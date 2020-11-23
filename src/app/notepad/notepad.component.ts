import { Component, OnInit } from '@angular/core';

export class Notepad {
  title: String;
  content: String;
  todo: String;
}
@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  titleModel: String;
  contentModel: String;
  todoModel: String;
  notepad: Notepad[];

  constructor() {
    this.titleModel = '';
    this.contentModel = '';
    this.todoModel = '';

    const defaultNotepad: Notepad = {
      title: 'my note',
      content: 'This is default note',
      todo: 'this is the default time you want your task done'
    };

    this.notepad = [defaultNotepad];
   }

  ngOnInit(): void {
  }
  
  createNotepad() {

    const newNotepad: Notepad = {
      title: this.titleModel,
      content: this.contentModel,
      todo: this.todoModel
    };

    this.notepad.push(newNotepad);

    //set the model value to '' again
    this.titleModel = this.todoModel = this.contentModel = '';
  }
  }

