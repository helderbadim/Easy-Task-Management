import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /** The user is the user to display. */
  @Input({ required: true }) user!: User;

  /** The selected is a boolean that indicates if the user is selected. */
  @Input({ required: true }) selected!: boolean;

  /** The select event is emitted when the user is selected. */
  @Output() select = new EventEmitter<string>();

  /** The imagePath is the path to the image of the user. */
  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }

  /** The userName is the name of the user. */
  get userName() {
    return this.user?.name;
  }

  /** The onSelectUser method is called when the user is selected. */
  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}
