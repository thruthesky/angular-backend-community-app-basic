import { Component } from '@angular/core';
import { TestAll } from 'angular-backend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private ta: TestAll){
    ta.backend.setBackendUrl("http://127.0.0.1:8000");
    //ta.run();
  }
}
