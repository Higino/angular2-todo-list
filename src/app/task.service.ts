import { Injectable }from '@angular/core';
import { TASKS } from './tasks-mock';
import { Task } from './task';

@Injectable()
export class TaskService {
  getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }
}
