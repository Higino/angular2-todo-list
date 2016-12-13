import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.css'],
  selector: 'tasks-view',
  providers: [TaskService]
})
export class TasksViewComponent {
  constructor (private aTaskService: TaskService) {

  }
  tasks: Task[];
  selectedTask : Task;

  // Demonstate lifecycle methods from angular
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    // this.taskService.getTasks().then(tasks => this.tasks = tasks);
    this.aTaskService.getTasks().then(tasks => this.tasks = tasks);
  }

  onSelectTask(task: Task): void {
    this.selectedTask = task;
  };
  onUnselectButtonClick(): void {
    this.selectedTask = null;
  }

}
