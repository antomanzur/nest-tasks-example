import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/CreateTask.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Task {
    return this.taskService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() taskInfo: CreateTaskDto): string {
    return `Task created with name: ${taskInfo.name}`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    return `Deleted task with id: ${id}`;
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    return `Updated task with id: ${id}`;
  }
}
