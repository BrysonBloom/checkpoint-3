import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";


function _drawNotes() {
    let notes = appState.Notes
    let template = ``
    notes.forEach(note => template += note.notesTemplate);
    setHTML('saved-notes', template)
}

function _drawNote() {
    let note = appState.activeNote
    // console.log(note);

    setHTML('active-note', note.noteTemplate)
}

export class NotesController {

    constructor() {

        _drawNotes()
        appState.on('Notes', _drawNotes)
        appState.on('activeNote', _drawNote)
    }

    createNote() {
        let form = window.event.target
        let formData = getFormData(form)
        window.event.preventDefault()
        notesService.createNote(formData)

        try {
            form.reset()
            // console.log(formData);
        } catch (error) {

        }


    }
    setActiveNote(noteId) {
        notesService.setActiveNote(noteId)
        // console.log(noteId);
    }

    updateNote() {
        let textArea = document.getElementById('body')
        let body = textArea.value
        notesService.updateNote(body)
        // console.log('updated');
    }

    async deleteNote(noteId) {
        const yes = await Pop.confirm('Are you sure you want to delete this note?')
        if (!yes) { return }
        notesService.deleteNote(noteId)
    }


}