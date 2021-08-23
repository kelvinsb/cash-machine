export const restAmount = (amount, value) => amount % value
export const quantityWithdraw = (amount, value) => Math.floor(amount / value)

export const validNotes = [100, 50, 20, 10]
export const randomRange = (max, min) =>
  Math.floor(Math.random() * (max - min) + min)

export const validNotesWithStock = () =>
  validNotes.map((validNote) => ({
    note: validNote,
    stock: Number.parseInt(process.env.NOTE_AMOUNT) || 30,
  }))

export const validNotesWithStockRandom = () =>
  validNotes.map((validNote) => ({
    note: validNote,
    stock: randomRange(10, 1),
  }))
