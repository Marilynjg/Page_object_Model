export class AddTask {

addTaskPan(text){
  cy.get('.new-todo').should('be.visible').type('Tarea1 {enter}')
}
addTaskNumbers(){
  cy.get('.new-todo').should('be.visible').type('555 {enter}')
}
addTaskSymbol(){
  cy.get('.new-todo').should('be.visible').type('"@"" {enter}')
}
addTaskEmoji(){
  cy.get('.new-todo').should('be.visible').type(':) {enter}')
}
checkTask(){
  cy.get('.new-todo').should('be.visible').type('tarea2 {enter}')
  cy.get('.toggle').check()
}
uncheckTask(){
  cy.get('.new-todo').should('be.visible').type('tarea 3 {enter}')
  cy.get('.toggle').uncheck()
}

}
   
