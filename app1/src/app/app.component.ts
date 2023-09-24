import {AfterContentChecked, AfterContentInit, Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit,AfterContentChecked {
  title = 'app1';

  // @Input() inputText: string | undefined
  text: string = ''

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  /*  ngDoCheck(): void {
      console.log(this.text)
    }*/

  /*ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputText']) {
      this.text = '**' + changes['inputText'].currentValue
    }
  }*/

  /*constructor() {
    setTimeout(()=>{
      this.text='nimal';
    },2000)

  }*/

  /*  ngOnInit(): void {
      setTimeout(()=>{
        this.text='bandara';
      },3000)
    }*/
}
