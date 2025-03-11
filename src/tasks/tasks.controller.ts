import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getAllTasks() {
  //   return this.tasksService.getAllTasks();
  // }

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto) {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   return this.tasksService.deleteTaskById(id);
  // }

  // @Patch('/:id')
  // updateStatusById(
  //   @Param('id') id: string,
  //   @Body() updateStatusDto: UpdateStatusDto,
  // ) {
  //   return this.tasksService.updateStatusById(id, updateStatusDto);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateStatusDto: UpdateStatusDto,
  // ): Task {
  //   const { status } = updateStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }
}
