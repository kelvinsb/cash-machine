import { checkAndGetFloat } from '../utils'

export class NoteService {
  constructor(noteEntity) {
    this._noteEntity = noteEntity
  }

  _removeWithoutStock(amount) {
    if (this._noteEntity.isAmountGreaterThanStock(amount)) return null

    return {
      withdrawn: this._noteEntity.quantityWithdraw(amount),
      rest: this._noteEntity.restAmount(amount),
    }
  }

  _removeWithStock(amount) {
    const quantityOnStock = this._noteEntity.getStock()
    const note = this._noteEntity.getNote()

    let tempAmount = amount
    let amountTo = 0

    while (tempAmount > 0) {
      const count = tempAmount - note
      if (count < 0) break
      if (amountTo === quantityOnStock) break
      tempAmount = count
      amountTo++
    }
    const amountToRemove = amountTo * note

    const quantityToRemove = this._noteEntity.quantityWithdraw(amountToRemove)

    this._removeStock(quantityToRemove)
    return {
      withdrawn: amountTo,
      rest: amount - amountToRemove,
    }
  }

  withdraw(amountParam) {
    const amount = checkAndGetFloat('amountParam', amountParam)

    const removedWithoutStock = this._removeWithoutStock(amount)
    if (removedWithoutStock) return removedWithoutStock

    return this._removeWithStock(amount)
  }

  getStock() {
    return this._noteEntity.getStock()
  }

  _removeStock(quantityToRemove) {
    if (!this._noteEntity.wasStockProvided()) return

    this._noteEntity.removeStock(quantityToRemove)
  }
}
