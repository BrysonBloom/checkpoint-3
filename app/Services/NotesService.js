import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { saveState } from "../Utils/Store.js";

class NotesService {
    updateNote(body) {
        let activeNote = appState.activeNote
        activeNote.body = body
        saveState('Notes', appState.Notes)
        appState.emit('activeNote')
    }

    createNote(formData) {
        let newNote = new Note(formData)
        appState.Notes.push(newNote)
        appState.Notes.forEach(note => {
            // console.log(note);
            if (note.id == newNote.id) {
                note.dateMade = note.time
                note.dateEdited = note.time
            }
        });
        saveState('notes', appState.Notes)
        appState.emit('Notes')
        console.log(appState.Notes)
    }

    setActiveNote(noteId) {
        let foundNote = appState.Notes.find(note => note.id == noteId)
        appState.activeNote = foundNote
        console.log(foundNote);
    }



}

export const notesService = new NotesService();