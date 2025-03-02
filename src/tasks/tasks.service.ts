import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id)!;
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
