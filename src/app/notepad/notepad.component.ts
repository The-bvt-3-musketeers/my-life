import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  notepadMessage: string;
  newNote: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  submitNote() {
    this.newNote = this.notepadMessage
  }
}
