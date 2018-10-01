import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserService } from "../userService.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"]
})
export class InactiveUsersComponent {
  @Input()
  users: string[];
  // @Output()
  // userSetToActive = new EventEmitter<number>();

  constructor(private UserService: UserService) {}
  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.UserService.toDo.emit({
      id : id,
      toActive: true
    });
  }
}
