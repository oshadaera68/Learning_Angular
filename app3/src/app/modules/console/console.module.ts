import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { ConsoleFooterComponent } from './components/console-footer/console-footer.component';
import { ConsoleHeaderComponent } from './components/console-header/console-header.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    ConsoleFooterComponent,
    ConsoleHeaderComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
