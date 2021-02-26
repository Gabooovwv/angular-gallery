import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ButtonDirective } from './button.directive';
import { DragAndDropDirective } from './drag-and-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDirective,
    DragAndDropDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
