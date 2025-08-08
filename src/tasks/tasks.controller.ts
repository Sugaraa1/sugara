import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Task | { error: string } {
    const task = this.tasksService.findOne(Number(id));
    if (!task) {
      return { error: `Task with ID ${id} not found` };
    }
    return task;
  }

  @Post()
  create(@Body() body: { title: string; description: string }): Task {
    return this.tasksService.create(body.title, body.description);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<Task>): Task {
    return this.tasksService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): { deleted: boolean } {
    const deleted = this.tasksService.remove(Number(id));
    return { deleted };
  }
}
