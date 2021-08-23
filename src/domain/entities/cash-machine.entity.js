import { NoteEntity } from './note.entity'

export class CashMachineEntity {
  constructor(notesWithStock) {
    const validNotes = notesWithStock
      .filter(
        (noteWithStock) =>
          !Number.isNaN(Number.parseFloat(noteWithStock.note)) &&
          !Number.isNaN(Number.parseInt(noteWithStock.stock))
      )
      .map(
        (noteWithStock) =>
          new NoteEntity(noteWithStock.note, noteWithStock.stock)
      )
      .sort((itemOne, itemTwo) => (itemOne.note < itemTwo.note ? 1 : -1))
    this.notes = validNotes
  }
}
