import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouterModule } from "./app.routes";

@NgModule({
    imports: [BrowserModule, HttpModule, appRouterModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
