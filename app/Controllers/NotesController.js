import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawNotes() {
    let notes = appState.Notes
    let template = ``
    notes.forEach(note => template += note.notesTemplate);
    setHTML('saved-notes', template)
}

function _drawNote() {
    let note = appState.activeNote


    setHTML('active-note', note.noteTemplate)
}

export class NotesController {

    constructor() {
        _drawNote()
        _drawNotes()
        appState.on('Notes', _drawNotes)
        appState.on('activeNote', _drawNote)
    }

    createNote() {
        window.event.preventDefault()
        let form = window.event.target
        let formData = getFormData(form)
        // console.log(formData);
        notesService.createNote(formData)


    }
    setActiveNote(noteId) {
        // notesService.setActiveNote(noteId)
        console.log(noteId);
    }

    updateNote() {
        let textArea = document.getElementById('body')
        let body = textArea.value
        notesService.updateNote(body)
    }


}