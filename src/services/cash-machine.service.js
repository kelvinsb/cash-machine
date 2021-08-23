import { NoteService } from './note.service'

export class CashMachineService {
  constructor(cashmachineEntity) {
    this.cashmachineEntity = cashmachineEntity
  }
  withdrawAll(amountParam) {
    let amount = amountParam
    return this.cashmachineEntity.notes.map((item) => {
      const noteService = new NoteService(item)
      const withdrawData = noteService.withdraw(amount)

      amount = withdrawData.rest

      return {
        note: item.getNote(),
        quantity: withdrawData.withdrawn,
        rest: amount,
      }
    })
  }
}
