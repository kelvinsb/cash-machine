## Descrição

O projeto é um caixa eletrônico com quantidade de notas finito. Simulando entrega de notas para o cliente desde que tenha a quantidade de notas suficiente e é informado quanto faltou para retirar.

---

### Características

- Entregar menor número de notas(respeitando quantidade finita)
- Quantidade a retirar infinito
- Quantidade de notas infinito
- Notas disponíveis
  1.  100
  2.  50
  3.  20
  4.  10

---

## Fluxo

1. É criado uma entidade do caixa para gerenciar as `n` notas, recebendo como parametro array com `note`(valor da nota) e `stock`(quantidade)
   - Atualmente está recebendo um valor fixo de notas com estoque definido(para modificar faça edição em `.env` `NOTE_AMOUNT`)
   1. Com isso é criado as `n` entidades com entidades da nota também
2. É passado a entidade anterior(`CashEntity`) para o respectivo serviço
3. Então chama o método `withdrawAll` de `cashMachineService`
4. Com isso cria serviço(`NoteService`) para cada nota e então chama o withdraw de cada passando como entrada a quantia restante anterior
5. Na lógica interna é calculado a quantidade de vezes que reduz o estoque(e quantia restante) sem ficar negativo
   - Retornar a quantia restante para o próximo
   - Retorna a quantidade de retiradas da nota atual

- Faz o retorno no formato

```json
{
  "transactions": [{
    "note": 100,
    "quantity": 3
  }, ...],
  "amountNotWithdrawn": 2
}
```

- Sendo que em `transactions`: `note` valor da nota; `quantity` quantidade retirada de cada nota
- `amountNotWithdrawn`: valor que sobrou devido a falta de notas

---

## Dependências

1. `yarn` ou `npm` instalado
2. `yarn install` ou `npm install`

---

## Execução dos testes automatizados

- `yarn test`

---

## Execução

Há duas maneiras de executar:

1. `yarn execute 150`
   - Vai ser executado no terminal
   - Onde `150` é a quantidade a ser retirada
2. `yarn start`
   - Vai executar o rest api
   - `POST` `http://localhost:3000/withdraw` `{"amount": 150}`
   - Se tiver a extensão `REST CLIENT` do `vscode` tem um arquivo `route.http` para executar rapidamente
