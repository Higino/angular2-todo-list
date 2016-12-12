import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
export class AppComponent implements OnInit {
  constructor( private taskService: TaskService) {

  }

  appName =  'Gestor de Tarefas';
  tasks: Task[];
  selectedTask : Task;

  // Demonstate lifecycle methods from angular
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    // this.taskService.getTasks().then(tasks => this.tasks = tasks);
    this.taskService.getTasksSlowly().then(tasks => this.tasks = tasks);
  }

  onSelectTask(task: Task): void {
    this.selectedTask = task;
  };
  onUnselectButtonClick(): void {
    this.selectedTask = null;
  }
}
