import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from './users/users.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, UsersComponent, LogComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
