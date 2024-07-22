export class TodoPage {
  visit() {
    cy.visit('https://todomvc.com/examples/react/dist/');
  }

  addTask(task) {
    cy.get('.new-todo').type(`${task}{enter}`);
  }

  verifyTaskInList(task) {
    cy.get('.todo-list').contains(task);
  }

  toggleTask() {
    cy.get('[data-testid="todo-item-toggle"]').click();
  }

  clearCompleted() {
    cy.get('.clear-completed').click();
  }
}

export const todoPage = new TodoPage();