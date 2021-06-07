
it('can display tasks screen', () => {
  navigateToTasks()
})

it('can display right information', () => {
  cy.fixture('tasks').then((tasks: {preSavedTasks: []}) => {
    localStorage.setItem('tasks', JSON.stringify(tasks.preSavedTasks))

    navigateToTasks()

    cy.contains('Listing tasks')
    cy.contains('ID: 1234')
    cy.contains('Name: Task 1')

    cy.get('button:contains("Back")').should('exist')
    cy.get('button:contains("Create")').should('exist')
  })
})

it('can click on back button', () => {
  navigateToTasks()

  cy.get('button:contains("Back")').click().then(() => {
    cy.url().should('equals', 'http://localhost:3000/')
  })
})

it('can click on create button', () => {
  navigateToTasks()

  cy.get('button:contains("Create")').click().then(() => {
    cy.url().should('equals', 'http://localhost:3000/tasks/create')
  })
})

function navigateToTasks() {
  cy.visit('/tasks/', {timeout: 10000})
  cy.url().should('equals', 'http://localhost:3000/tasks/')
}
