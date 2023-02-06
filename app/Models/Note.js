import { generateId } from "../Utils/generateId.js"

export class Note {
  constructor(data) {
    this.name = data.name || 'New Note'
    this.body = data.body || ''
    this.color = data.color
    this.id = generateId()
    this.dateMade = data.dateMade
    this.dateEdited = data.dateEdited
  }


  get notesTemplate() {
    return /*html*/`<div class="row">
        <div class="col-12 p-3">
          <div class="card"  >
          <div class="card-body m-0" onclick="app.notesController.setActiveNote('${this.id}')">
          <p class="fs-6 fw-bolder m-0" style="color: ${this.color};">${this.name}</p>
          </div>
          <button class="btn btn-danger" onclick="app.notesController.deleteNote('${this.id}')">Delete Note</button>
          </div>

      `
  }

  get noteTemplate() {
    return /*html*/`
        <div class="row w-">
          <div class="col-4 p-3">
            <h2 class="text-shadow" style="color: ${this.color};">${this.name}</h2>
            <h5 class="text-white-50">${this.dateMade}</h5>
            <h5 class="text-white-50">${this.dateEdited}</h5>
          </div>
          <div class="col-6 pb-5">
            <textarea class="" style="height: 85.45vh; width: 40vw" name="body" id="body" onblur="app.notesController.updateNote()">${this.body}</textarea>
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
    let min = String(today.getMinutes()).padStart(2, '0')
    let apm = ''
    if (hh > 12) {
      hh = hh - 12
      apm = 'PM'
    } else {
      apm = 'AM'
    }
    today = mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + min + ' ' + apm;
    return (today)

  }


}