import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LectureService } from './lecture.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },LectureService],
  bootstrap: [AppComponent],
})
export class AppModule {}
