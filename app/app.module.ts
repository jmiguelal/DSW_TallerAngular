import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { SeriesComponent } from '../series/series.component';

@NgModule({
  imports: [
    CommonModule, HttpClient
  ],
  declarations: [AppComponent, SeriesComponent]
})
export class AppModule { }
