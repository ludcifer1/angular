import { EventEmitter, Output } from '@angular/core';

export class UserService {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  // toActive = new EventEmitter<number>();
  // toInActive = new EventEmitter<number>();

  toDo = new EventEmitter<any>();

  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================
  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
}
