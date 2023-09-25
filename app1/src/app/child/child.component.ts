import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges{
  @Input() message:string | undefined = '';

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    console.log(changes['message'].currentValue)
    console.log(changes['message'].previousValue)
  }
}
