import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

export class TasksRepository extends Repository<Task> {
  // Your custom methods here
}
