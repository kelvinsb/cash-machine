import { quantityWithdraw, restAmount } from '../../utils'
import {
  checkAndGetFloat,
  checkAndGetInteger,
} from '../../utils/check-and-get-number'

export class NoteEntity {
  constructor(note, stock = null) {
    this._setBanknote(note)
    this._setStock(stock)
  }

  quantityWithdraw(amount) {
    return quantityWithdraw(amount, this.getNote())
  }

  restAmount(amount) {
    return restAmount(amount, this.getNote())
  }

  getStock() {
    return this.stock
  }

  getNote() {
    return this.note
  }

  isAmountGreaterThanStock(amount) {
    return amount > this.getStock()
  }

  wasStockProvided() {
    return this.stock !== null && typeof this.stock !== 'undefined'
  }

  removeStock(stockToRemove) {
    if (this.isAmountGreaterThanStock(stockToRemove)) {
      throw new Error('Amount to remove is greater than current stock')
    }

    this.stock -= stockToRemove
  }

  _setBanknote(note) {
    const amountToAdd = checkAndGetFloat('note', note)

    this.note = amountToAdd
  }
  _setStock(stockToSet) {
    if (!stockToSet) return

    const isStockNegative = stockToSet < 0
    if (isStockNegative) {
      throw new Error('Note stock must be positive number.')
    }

    const isStockNotInteger = !Number.isInteger(stockToSet)
    if (isStockNotInteger)
      throw new Error('Note stock must be an integer number.')

    const stockInt = checkAndGetInteger('stock', stockToSet)

    this.stock = stockInt
  }
}
