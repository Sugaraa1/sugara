import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task | undefined {
  return this.tasks.find(task => task.id === id);
}

  create(title: string, description: string): Task {
    const newTask: Task = {
      id: this.idCounter++,
      title,
      description,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, updateData: Partial<Task>): Task {
  const task = this.findOne(id);
  if (!task) {
    throw new Error(`Task with ID ${id} not found`);
  }
  Object.assign(task, updateData);
  return task;
}


  remove(id: number): boolean {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }
}
