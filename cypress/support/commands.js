Cypress.Commands.add('createDefaultTodos', () => {
  const TODO_ITEM_ONE = 'Buy Milk'
  const TODO_ITEM_TWO = 'Pay Rent'
  const TODO_ITEM_THREE = 'Walk Dog'

  Cypress.log({
    name: 'create default todos',
    consoleProps() {
      return {
        'Inserted Todos': [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE],
      }
    },
  })

  cy.get('.new-todo')
    .type(`${TODO_ITEM_ONE}{enter}`)
    .type(`${TODO_ITEM_TWO}{enter}`)
    .type(`${TODO_ITEM_THREE}{enter}`)
})
