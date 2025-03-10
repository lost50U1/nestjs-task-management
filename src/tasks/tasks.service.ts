import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
// import { UpdateStatusDto } from './dto/update-status.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto) {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }

        return false;
      });
    }
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find((task) => task.id === id)!;

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  // updateStatusById(
  //   id: string,
  //   updateStatusDto: UpdateStatusDto,
  // ): Task | undefined {
  //   const { status } = updateStatusDto;

  //   // Find the index of the task with the given ID
  //   const index = this.tasks.findIndex((task) => task.id === id);

  //   if (index !== -1) {
  //     // Update the task at the found index
  //     this.tasks[index] = { ...this.tasks[index], status };

  //     // Return the updated task
  //     return this.tasks[index];
  //   } else {
  //     console.warn(`Task with ID ${id} not found.`);
  //     return undefined;
  //   }
  // }

  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }
}
