/* eslint-disable no-unused-vars */
require('dotenv').config()
import { CashMachineEntity } from '../domain/entities'
import { CashMachineService } from '../services/cash-machine.service'
import { validNotesWithStock } from '../utils'

const main = () => {
  const [_, __, amountParam] = process.argv
  const amount = Number.parseFloat(amountParam)

  if (Number.isNaN(amount)) throw new Error('amount must be a number')

  const cashMachineEntity = new CashMachineEntity(validNotesWithStock())
  const cashMachineService = new CashMachineService(cashMachineEntity)
  const withDraw = cashMachineService.withdrawAll(amount)
  const withDrawResponse = withDraw.map((item) => ({
    note: item.note,
    quantity: item.quantity,
  }))
  console.table(withDrawResponse)
  console.log({ amountNotWithdrawn: withDraw[withDraw.length - 1].rest })
}
main()
