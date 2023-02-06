import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { saveState } from "../Utils/Store.js";

class NotesService {


    updateNote(body) {
        let activeNote = appState.activeNote
        let totalCharacters = 0
        totalCharacters = body.length;
        // console.log(totalCharacters);
        activeNote.characters = totalCharacters
        activeNote.body = body
        activeNote.dateEdited = activeNote.time
        saveState('notes', appState.Notes)
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
        // console.log(appState.Notes)
    }

    setActiveNote(noteId) {
        let foundNote = appState.Notes.find(note => note.id == noteId)
        appState.activeNote = foundNote
        // console.log(foundNote);
        appState.emit('activeNote')
    }

    deleteNote(noteId) {
        let index = appState.Notes.findIndex(i => i.id == noteId)
        appState.Notes.splice(index, 1)
        saveState('notes', appState.Notes)
        appState.emit('Notes')
    }

}

export const notesService = new NotesService();