import { CashMachineEntity } from '../../domain/entities'
import { CashMachineService } from '../../services/cash-machine.service'
import { validNotesWithStock } from '../../utils'

const validate = (res, amountParam) => {
  if (!amountParam) {
    return res.status(400).json({
      error: 'amount must be provided',
    })
  }

  const amount = Number.parseFloat(amountParam)
  if (Number.isNaN(amount)) {
    return res.status(400).json({
      error: 'amount must be a number',
    })
  }
  return amount
}

export const WithdrawController = (req, res) => {
  const { body } = req
  const { amount: amountParam } = body

  const amount = validate(res, amountParam)

  try {
    const cashMachineEntity = new CashMachineEntity(validNotesWithStock())
    const cashMachineService = new CashMachineService(cashMachineEntity)

    const withDraw = cashMachineService.withdrawAll(amount)
    const withDrawResponse = withDraw.map((item) => ({
      note: item.note,
      quantity: item.quantity,
    }))

    return res.json({
      transactions: withDrawResponse,
      amountNotWithdrawn: withDraw[withDraw.length - 1].rest,
    })
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}
