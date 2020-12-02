import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Notepad } from '../shared/notepad.model';
import { NotepadService } from './notepad.service';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css'],
  providers: [NotepadService]
})
export class NotepadComponent implements OnInit {
  @ViewChild('titleInput') titleReference: ElementRef;
  @ViewChild('noteInput') noteReference: ElementRef;
  everyNote: Notepad[]

  constructor(private notepadService: NotepadService) { }

  ngOnInit(): void {
    this.everyNote = this.notepadService.myNotes()
    this.notepadService.newNoteAdded
      .subscribe(
        (submitNote: Notepad[]) => {
          this.everyNote = submitNote
        }
      )
  }
  submitNote() {
    const title = this.titleReference.nativeElement.value;
    const note = this.noteReference.nativeElement.value;
    const addNote = new Notepad(title, note)
    this.notepadService.addNewNote(addNote)
    this.titleReference.nativeElement.value = '';
    this.noteReference.nativeElement.value = '';

  }
}
