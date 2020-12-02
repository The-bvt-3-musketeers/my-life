import { EventEmitter, Injectable } from "@angular/core";
import { Notepad } from '../shared/notepad.model';

@Injectable()

export class NotepadService {
  newNoteAdded = new EventEmitter<Notepad[]>()
  private allNotes: Notepad[] = [];

  myNotes() {
    return this.allNotes.slice()
  }

  addNewNote(note: Notepad) {
    this.allNotes.push(note)
    this.newNoteAdded.emit(this.allNotes.slice())
  }
}