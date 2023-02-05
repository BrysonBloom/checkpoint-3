import { generateId } from "../Utils/generateId.js"

export class Note {
    constructor(data) {
        this.name = data.name || 'New Note'
        this.body = data.body
        this.color = data.color
        this.id = generateId()
        this.dateMade = data.dateMade
        this.dateEdited = data.dateEdited
    }


    get notesTemplate() {
        return /*html*/`<div class="row">
        <div class="col-12 p-3">
          <div class="card" onclick2="console.log('test')" onclick="app.notesController.setActiveNote('${this.id}')">
            <div class="card-body m-0">
              <p class="fs-6 fw-bolder m-0" style="color: ${this.color};">${this.name}</p>
            </div>
          </div>

      `
    }

    get noteTemplate() {
        return /*html*/`
        <div class="row">
        <div class="col-4 p-3">
          <h2 class="text-light">Note Name</h2>
          <h5 class="text-white-50">${this.dateMade}</h5>
          <h5 class="text-white-50">${this.dateEdited}</h5>
        </div>
        <div class="col-6">
          <textarea class="" name="body" id="body" cols="90" rows="30" onblur="app.notesController.updateNote()">${this.body}</textarea>
        </div>
        <div class="col-2"></div>
      </div>`
    }

    get time() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let hh = today.getHours()
        let min = today.getMinutes()
        today = mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + min;
        return (today)

    }
}