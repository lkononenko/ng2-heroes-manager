import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Heroes Manager';

  notificationOptions = {
    position: ["top", "right"],
    timeOut: 8000
  };
}
