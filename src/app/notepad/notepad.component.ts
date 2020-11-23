import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  allNotes = [];
  notepadMessage: string;
  constructor() { }

  ngOnInit(): void {
  }
  submitNote() {
    this.allNotes.push(this.notepadMessage)
    console.log(this.allNotes)
  }
}
