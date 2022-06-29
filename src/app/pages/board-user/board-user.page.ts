import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { EventBusService } from '../_shared/event-bus.service';
import { EventData } from '../_shared/event.class';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.page.html',
  styleUrls: ['./board-user.page.scss'],
})
export class BoardUserPage implements OnInit {
  content?: string;
  constructor(
    private userService: UserService,
    private eventBusService: EventBusService
  ) {}

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      (data) => {},
      (err) => {
        this.content = err.error.message || err.error || err.message;
        if (err.status === 403)
          this.eventBusService.emit(new EventData('logout', null));
      }
    );
  }
}
