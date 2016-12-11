import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = TASKS;
  selectedTask : Task;
  task: Task = {
    id: 1,
    name: 'Uma tarefa',
    desc: 'A descrição de uma tarefa'
  };
  appName =  'Gestor de Tarefas';
  onSelectTask(task: Task): void {
    this.selectedTask = task;
  };
  onUnselectButtonClick(): void {
    console.log("unselecte cliecked");
    this.selectedTask = null;
  }
}


export class Task {
  id: number;
  name: string;
  desc: string;
}


const TASKS: Task [] = [
  {id: 1, name: 'Tarefa numero 1', desc: 'Descrição da tarefa numero 1'},
  {id: 2, name: 'Tarefa numero 2', desc: 'Descrição da tarefa numero 2'},
  {id: 3, name: 'Tarefa numero 3', desc: 'Descrição da tarefa numero 3'},
  {id: 4, name: 'Tarefa numero 4', desc: 'Descrição da tarefa numero 4'},
  {id: 5, name: 'Tarefa numero 5', desc: 'Descrição da tarefa numero 5'},
  {id: 6, name: 'Tarefa numero 6', desc: 'Descrição da tarefa numero 6'},
  {id: 7, name: 'Tarefa numero 7', desc: 'Descrição da tarefa numero 7'},
  {id: 8, name: 'Tarefa numero 8', desc: 'Descrição da tarefa numero 8'},
  {id: 9, name: 'Tarefa numero 9', desc: 'Descrição da tarefa numero 9'},
  {id: 10, name: 'Tarefa numero 10', desc: 'Descrição da tarefa numero 10'},
]
