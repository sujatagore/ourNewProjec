import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ourNewProjec';
  skills : Array<string> = ["TS", "JS", "HTML", "Angular"];
}
