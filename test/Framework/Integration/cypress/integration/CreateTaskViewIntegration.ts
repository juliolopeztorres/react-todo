
it('can display task create screen', () => {
  navigateToTaskCreate()
})

it('can display right information', () => {
  navigateToTaskCreate()

  cy.contains('Create new task')
  cy.get('[name="id"]').should('be.empty')
  cy.get('[name="id"]').should('have.attr', 'placeholder', 'Enter an id...')
  cy.get('[name="name"]').should('be.empty')
  cy.get('[name="name"]').should('have.attr', 'placeholder', 'Enter a name...')

  cy.get('button:contains("Back")').should('exist')
  cy.get('button:contains("Create")').should('exist')
})

it('can click on back button', () => {
  navigateToTaskCreate()

  cy.get('button:contains("Back")').click().then(() => {
    cy.url().should('equals', 'http://localhost:3000/tasks')
  })
})

it('can click on create button', () => {
  testTask({id: '6666', name: 'My brand new task'})
})

it('can create several tasks', () => {
  cy.fixture('tasks').then((tasks: {stressfulTasks: {id: string, name: string}[]}) =>
    tasks.stressfulTasks.forEach((task) => {
    testTask(task);
  }))
})

function testTask(task: {id: string, name: string}) {
  navigateToTaskCreate()

  cy.get('[name="id"]').type(task.id)
  cy.get('[name="name"]').type(task.name)

  cy.get('button:contains("Create")').click().then(() => {
    cy.url().should('equals', 'http://localhost:3000/tasks')

    cy.contains(`ID: ${task.id}`)
    cy.contains(`Name: ${task.name}`)
  })
}

function navigateToTaskCreate() {
  cy.visit('/tasks/create', {timeout: 10000})
  cy.url().should('equals', 'http://localhost:3000/tasks/create')
}
