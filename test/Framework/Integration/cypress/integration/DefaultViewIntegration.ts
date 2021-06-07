it('can display home screen', () => {
  cy.visit('/', {timeout: 10000})
  cy.url().should('equals', 'http://localhost:3000/')
})

it('can display the right information', () => {
  cy.visit('/', {timeout: 10000})

  cy.contains('Welcome page :_)')
  cy.contains('Click on the button to get some tasks')
  cy.contains('Give me some tasks')
})

it('can click on button', () => {
  cy.visit('/', {timeout: 10000})
  cy.url().should('equals', 'http://localhost:3000/')

  cy.get('button').click().then(() => {
    cy.url().should('equals', 'http://localhost:3000/tasks')
  })
})
