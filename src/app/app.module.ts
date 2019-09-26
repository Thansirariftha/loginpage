import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule} from '@angular/material';
  import { FormsModule } from '@angular/forms';
  import { ReactiveFormsModule } from '@angular/forms';
  

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule, 
    MatRadioModule,
    MatSelectModule, 
    MatSliderModule, 
    MatSlideToggleModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
