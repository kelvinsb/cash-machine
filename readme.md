## Descrição

O projeto é um caixa eletrônico com quantidade de notas finito. Simulando entrega de notas para o cliente desde que tenha a quantidade de notas suficiente e é informado quanto faltou para retirar.

---

### Características

- Entregar menor número de notas(respeitando quantidade finita)
- Quantidade a retirar infinita
- Quantidade de notas infinito
- Notas disponíveis
  1.  100
  2.  50
  3.  20
  4.  10

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
