import { validNotesWithStockRandom } from '../../utils'
import { CashMachineEntity } from './cash-machine.entity'

describe('cashMachineEntity', () => {
  describe('create', () => {
    it('right', () => {
      const notes = validNotesWithStockRandom()

      const cashMachineEntity = new CashMachineEntity(notes)
      expect.assertions(cashMachineEntity.notes.length)

      cashMachineEntity.notes.forEach((item) => {
        expect(item.getNote()).not.toBeNull()
      })
    })
  })
})
