import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
/** Component decorator is used to define a component. */
/**
 * The selector is the name of the component.
 * The standalone is a flag to indicate that the component is standalone.
 * The imports are the modules that are imported into the component.
 * The templateUrl is the template of the component.
 * The styleUrl is the style of the component.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    //The ! is used to tell the compiler that the value is not null.
    //find returns an optional value, so we need to use the ! to tell the compiler that the value is not null.
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
} // This is the root component of the application.
