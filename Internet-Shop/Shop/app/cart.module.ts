import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart.component';
import { DataService } from "./services/data.service";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [CartComponent],
    bootstrap: [CartComponent],
    providers: [DataService]
})
export class CartModule { }