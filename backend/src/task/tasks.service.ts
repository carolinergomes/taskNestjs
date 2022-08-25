import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskDto } from './dto/tasks.dto';
import { Task } from './entity/create.task';

@Injectable()
export class TasksService {
  private tasks: TaskDto[] = [];

  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  create(task: Task) {
    // inserir no banco de dados usando o repository
    // this.tasks.push(task);
    this.tasksRepository.create(task);
    this.tasksRepository.insert(task);
  }

  async findAll(): Promise<Task[]> {
    // busca os elementos do bd
    return await this.tasksRepository.find();
  }

  async findOne(id: string): Promise<Task> {
    // const task = this.tasks.filter((value) => value.id === id);
    return await this.tasksRepository.findOneBy({ id });
  }

  async remove(id: string) {
    // const tasks_remove = this.tasks.filter((value) => value.id !== id);
    // this.tasks = tasks_remove;
    return await this.tasksRepository.delete(id);
  }

  //atualizar na lista
  async update(TaskToUpdate: TaskDto, id: string): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({ id });
    const updated = Object.assign(TaskToUpdate, task);

    return await this.tasksRepository.save(updated);
}
}
