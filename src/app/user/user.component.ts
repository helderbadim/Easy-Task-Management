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
  /**
   * Input is a decorator that allows us to pass data from the parent component to the child component.
   * In this case, we are passing the avatar and name of the user to the child component.
   */
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  /**
   * Output is a decorator that allows us to emit events from the child component to the parent component.
   * In this case, we are emitting an event when the user is selected.
   */
  @Output() select = new EventEmitter<string>();
  // select = output<string>(); //the output function does not create any kind of signal. Its still emits a custom event.

  // avatar = input.required<string>(); // This is a signal that will be updated when the input changes.
  // name = input.required<string>(); // This is a signal that will be updated when the input changes.

  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }

  get userName() {
    return this.user?.name;
  }

  // imagePath = computed(() => 'assets/users/' + this.avatar());
  // userName = computed(() => this.name());

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}

/**
 * Angular does updates the DOM when the data changes because of a part of Angular framework called zone.js.
 *  Zone.js notifies Angular that the data has changed and Angular updates the DOM accordingly.
 */


/**
 * There are two approaches to update state in Angular:
 * Option 1 - Zone.js
 * Option 2  - Signals
 * Signal is in the end a container for a value that can be updated. When we update the signal, Angular will be notified and the DOM will be updated accordingly.
 */

/**
 * With signals, angular dont need zone.js to update the DOM when the data changes.
 *
 */
