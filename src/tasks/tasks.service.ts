import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  task: Task[] = [
    {
      id: 1,
      name: 'First Task',
      description: 'Description of first task',
      done: true,
    },
    {
      id: 2,
      name: 'Second Task',
      description: 'Description of second task',
      done: false,
    },
    {
      id: 3,
      name: 'Third Task',
      description: 'Description of third tk',
      done: false,
    },
  ];

  getTasks(): Task[] {
    return this.task;
  }

  getTask(id: number): Task {
    return this.task.find((task) => task.id === id);
  }
}
