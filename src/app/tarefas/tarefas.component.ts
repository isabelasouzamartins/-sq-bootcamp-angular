
import { Task } from './../services/models/task.model';
import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']

})
export class TarefasComponent implements OnInit {

  tarefasParaHoje: Task[] = [];
  tarefasParaAmanha: Task[] = [];
  tarefasParaOsProximosDias: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.onUpdateTasks()
    .subscribe(
      () => {
        this.init();
      }
    );

    this.init();
  }

  private init() {
    this.listTasksForToday();
    this.listTasksForTomorrow();
    this.listUpcomingTasks();
  }

  private listTasksForToday() {
    this.taskService
    .listTasksForToday()
    .subscribe(
      (tarefas: Task[]) => {
        this.tarefasParaHoje = tarefas;
      }
    );
  }

  private listTasksForTomorrow() {
    this.taskService
    .listTasksForTomorrow()
    .subscribe(
      (tarefas: Task[]) => {
        this.tarefasParaAmanha = tarefas;
      }
    );
  }

  private listUpcomingTasks() {
    this.taskService
    .listUpcomingTasks()
    .subscribe(
      (tarefas: Task[]) => {
        this.tarefasParaOsProximosDias = tarefas;
      }
    );
  }
}
