import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { NewComponent } from './components/new/new.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindComponent } from './components/find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    NewComponent,
    UpdateComponent,
    DeleteComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
