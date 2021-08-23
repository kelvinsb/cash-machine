import { NoteEntity } from '../domain/entities'
import { NoteService } from '.'

describe('NoteService', () => {
  describe('withdraw', () => {
    describe('right', () => {
      it('without stock with rest', () => {
        // Arrange
        const noteParam = 50
        const moneyAmount = 165

        const expectRestAmount = 15
        const expectWithdrawn = 3

        const note = new NoteEntity(noteParam)
        const noteService = new NoteService(note)
        const withdraw = noteService.withdraw(moneyAmount)

        // Act

        // Assert
        expect(withdraw.rest).toBe(expectRestAmount)
        expect(withdraw.withdrawn).toBe(expectWithdrawn)
      })

      it('without stock without rest', () => {
        // Arrange
        const noteParam = 50
        const moneyAmount = 150

        const expectRestAmount = 0
        const expectWithdrawn = 3

        const note = new NoteEntity(noteParam)
        const noteService = new NoteService(note)
        const withdraw = noteService.withdraw(moneyAmount)

        // Act

        // Assert
        expect(withdraw.rest).toBe(expectRestAmount)
        expect(withdraw.withdrawn).toBe(expectWithdrawn)
      })

      it('with stock and rest', () => {
        // Arrange
        const noteParam = 50
        const moneyAmount = 150
        const stock = 3

        const expectRestAmount = 0
        const expectWithdrawn = 3

        const note = new NoteEntity(noteParam, stock)
        const noteService = new NoteService(note)
        const withdraw = noteService.withdraw(moneyAmount)

        // Act

        // Assert
        expect(withdraw.rest).toBe(expectRestAmount)
        expect(withdraw.withdrawn).toBe(expectWithdrawn)
        expect(noteService.getStock()).toBe(0)
      })

      it('with low stock and rest when stock reach zero', () => {
        // Arrange
        const noteParam = 50
        const moneyAmount = 150
        const stock = 2

        const expectRestAmount = 50
        const expectWithdrawn = 2

        const note = new NoteEntity(noteParam, stock)
        const noteService = new NoteService(note)
        const withdraw = noteService.withdraw(moneyAmount)

        // Act

        // Assert
        expect(withdraw.rest).toBe(expectRestAmount)
        expect(withdraw.withdrawn).toBe(expectWithdrawn)
        expect(noteService.getStock()).toBe(0)
      })
    })
    it('wrong', () => {
      // Arrange
      // Act
      // Assert
    })
  })
})
