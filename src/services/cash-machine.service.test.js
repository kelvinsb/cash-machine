import { CashMachineEntity } from '../domain/entities'
import { validNotesWithStockRandom } from '../utils'
import { CashMachineService } from './cash-machine.service'

describe('CashMachineService', () => {
  describe('withdrawAll', () => {
    it('right', () => {
      const notes = validNotesWithStockRandom()

      const cashMachineEntity = new CashMachineEntity(notes)
      const cashMachineService = new CashMachineService(cashMachineEntity)
      const amount = 165
      const withdrawALl = cashMachineService.withdrawAll(amount)

      const rest = withdrawALl.reduce(
        (acc, current) => acc - current.quantity * current.note,
        amount
      )
      expect(rest).toBe(withdrawALl[withdrawALl.length - 1].rest)
    })
  })
})
