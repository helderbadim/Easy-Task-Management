import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  /** The users is the list of users. */
  users = DUMMY_USERS;

  /** The selectedUserId is the id of the selected user. */
  selectedUserId?: string;

  /** The selectedUser is the user who is selected. */
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  /** The onSelectUser method is called when the user is selected.
   * @param id - The id of the user who is selected.
  */
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
