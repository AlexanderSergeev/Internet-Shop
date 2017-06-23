import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarComponent } from './car.component';
import { appRouterModule } from "./app.routes";
import { DataService } from "./services/data.service";

@NgModule({
    imports: [BrowserModule, HttpModule, appRouterModule],
    declarations: [AppComponent, CarComponent],
    bootstrap: [AppComponent],
    providers: [DataService]
})
export class AppModule { }
