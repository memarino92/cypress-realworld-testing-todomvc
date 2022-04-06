describe('React TodoMVC', () => {
  it('adds a single todo', () => {
    cy.visit('http://localhost:8888')
    cy.get('.new-todo').type('Buy Milk{enter}')
    cy.get('.todo-list li').should('have.length', 1)
  })
})
