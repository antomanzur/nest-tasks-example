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
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTask(id);
  }

  @Post()
  async createTask(@Body() taskInfo: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(taskInfo);
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
