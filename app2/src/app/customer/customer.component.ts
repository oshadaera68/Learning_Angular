import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  data: string | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.data = this.activatedRoute.snapshot.paramMap.get('data')!;
    this.activatedRoute.paramMap.subscribe(
      response=>{
        this.data = response.get('data')!
      }
    )
  }
}
