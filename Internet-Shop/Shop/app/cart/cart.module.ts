import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart.component';
import { CartService } from "../shared/cart.service";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [CartComponent],
    bootstrap: [CartComponent],
    providers: [CartService]
})
export class CartModule { }