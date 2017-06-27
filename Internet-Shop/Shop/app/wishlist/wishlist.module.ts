import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { WishListComponent } from './wishlist.component';
import { CartService } from "../shared/cart.service";
import { WishListService } from "../shared/wishlist.service";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [WishListComponent],
    bootstrap: [WishListComponent],
    providers: [CartService, WishListService]
})
export class WishListModule { }