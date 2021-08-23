import { NoteEntity } from '.'

describe('NoteEntity', function () {
  describe('create', function () {
    describe('wrong', function () {
      it('note string', function () {
        // Arrange
        const note = 'something'
        const expectedError = 'note must be a float number.'

        // Act
        const wrongNoteString = function () {
          new NoteEntity(note)
        }

        // Assert
        expect(wrongNoteString).toThrowError(expectedError)
      })

      it('stock negative', () => {
        const note = 10
        const stock = -3

        const negativeStock = () => {
          new NoteEntity(note, stock)
        }

        expect(negativeStock).toThrowError(
          'Note stock must be positive number.'
        )
      })

      it('stock text', () => {
        const note = 10
        const stock = 'something'

        const negativeStock = () => {
          new NoteEntity(note, stock)
        }

        expect(negativeStock).toThrowError(
          'Note stock must be an integer number.'
        )
      })

      it('remove more than stock', () => {
        const note = 50
        const stock = 3
        const quantityToRemove = 4

        const noteCreated = new NoteEntity(note, stock)

        const removeStock = () => noteCreated.removeStock(quantityToRemove)

        expect(removeStock).toThrowError(
          'Amount to remove is greater than current stock'
        )
      })
    })

    describe('right', function () {
      it('note string number', function () {
        // Arrange
        const paperMoneyString = '1'
        const expected = Number.parseFloat(paperMoneyString)

        // Act
        const note = new NoteEntity(paperMoneyString)

        // Assert
        expect(note.note).toBe(expected)
      })
      describe('with stock', () => {
        it('exact with nothing last', () => {
          const note = 50
          const stock = 3
          const amount = 150

          const expectedWithdrawQuantity = Math.floor(amount / note)

          const noteCreated = new NoteEntity(note, stock)

          expect(noteCreated.getStock()).toBe(stock)
          expect(noteCreated.getNote()).toBe(note)

          expect(noteCreated.quantityWithdraw(amount)).toBe(
            expectedWithdrawQuantity
          )
          expect(noteCreated.restAmount(amount)).toBe(0)
        })

        it('some rest needed', () => {
          const note = 50
          const stock = 3
          const amount = 165

          const expectedWithdrawQuantity = Math.floor(amount / note)

          const noteCreated = new NoteEntity(note, stock)

          expect(noteCreated.getStock()).toBe(stock)
          expect(noteCreated.getNote()).toBe(note)

          expect(noteCreated.quantityWithdraw(amount)).toBe(
            expectedWithdrawQuantity
          )
          expect(noteCreated.restAmount(amount)).toBe(15)
        })

        it('remove stock', () => {
          const note = 50
          const stock = 3
          const amount = 165
          const quantityToRemove = 1

          const expectedWithdrawQuantity = Math.floor(amount / note)

          const noteCreated = new NoteEntity(note, stock)

          noteCreated.removeStock(quantityToRemove)

          expect(noteCreated.getStock()).toBe(stock - quantityToRemove)
          expect(noteCreated.getNote()).toBe(note)

          expect(noteCreated.quantityWithdraw(amount)).toBe(
            expectedWithdrawQuantity
          )
          expect(noteCreated.restAmount(amount)).toBe(15)
        })
      })
    })
  })
})
