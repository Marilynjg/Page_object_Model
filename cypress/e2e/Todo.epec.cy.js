/// <reference types="cypress" />

import { HomePage } from '../PaginaTodo/Homepage';
import { AddTask } from '../PaginaTodo/practica_POM'

describe('test Add Task', () => {
  const addTask= new AddTask()
  const homePage= new HomePage()
  beforeEach(()=>{
    homePage.visitpage();
  })
    it('add task', () => {
      addTask.addTaskPan();
      addTask.addTaskNumbers();
      addTask.addTaskSymbol();
      addTask.addTaskEmoji();
      });
      it('check task ',()=>{
        addTask.checkTask();
        addTask.uncheckTask();
      })
})//ultimo

