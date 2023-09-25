import {Component} from '@angular/core';
import {LkrPipe} from "./pipes/LkrPipe";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app1';
  option: any = 'A';


}
