import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { MainModule } from './main/main.module';
import { HomeModule } from './main/home/home.module';
import { CarsModule } from './main/cars/cars.module';
import { DealersModule } from './main/dealers/dealers.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    BrowserAnimationsModule,
    MainModule,
    HomeModule,
    CarsModule,
    DealersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
