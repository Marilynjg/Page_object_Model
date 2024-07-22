import { todoPage } from '../page_objects/TodoPage';

describe('Agregar tareas', () => {
  beforeEach(() => {
    todoPage.visit();
  });

  it('Agregar tarea a la lista', () => {
    todoPage.addTask('Tarea 1');
    todoPage.verifyTaskInList('Tarea 1');
  });

  it('Marcar tarea como completada', () => {
    todoPage.addTask('Tarea 1');
    todoPage.verifyTaskInList('Tarea 1');
    todoPage.toggleTask();
  });

  it('Borrar tarea completada con función Clear Completed', () => {
    todoPage.addTask('Tarea 1');
    todoPage.verifyTaskInList('Tarea 1');
    todoPage.toggleTask();
    todoPage.clearCompleted();
  });
});

