import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'start-up';

  constructor(private ds: DataService) {

  }

  ngOnInit() {
    this.ds.getProducts().subscribe(i => console.log(i));
  }
}
