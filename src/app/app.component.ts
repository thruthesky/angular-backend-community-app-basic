import { Component } from '@angular/core';
import { TestAll } from 'angular-backend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private ta: TestAll){
//    ta.backend.setBackendUrl("http://127.0.0.1:8000");
    ta.backend.setBackendUrl("http://backend.org/index.php");
    //ta.run();
  }
}
