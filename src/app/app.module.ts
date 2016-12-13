import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TaskDetailComponent  } from './task-detail.component'
import { TasksViewComponent } from './tasks-view.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TasksViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
