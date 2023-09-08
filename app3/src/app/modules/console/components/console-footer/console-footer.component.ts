import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-footer',
  templateUrl: './console-footer.component.html',
  styleUrls: ['./console-footer.component.scss']
})
export class ConsoleFooterComponent implements OnInit{
  
  date = new Date().getFullYear()

  constructor(){

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
