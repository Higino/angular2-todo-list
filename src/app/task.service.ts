import { Injectable }from '@angular/core';
import { TASKS } from './tasks-mock';
import { Task } from './task';

@Injectable()
export class TaskService {
  getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }

getTasksSlowly(): Promise<Task[]> {
  return new Promise<Task[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getTasks());
}
}
