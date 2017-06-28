import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car.component';
import { appRouterModule } from "./app.routes";
import { CarsService } from "./shared/cars.service";
import { CartService } from './shared/cart.service';
import { WishListService } from './shared/wishlist.service';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wishlist/wishlist.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, HttpModule, appRouterModule, FormsModule],
    declarations: [CarsComponent, CarComponent, WishListComponent, CartComponent, AppComponent, PurchaseComponent],
    bootstrap: [AppComponent],
    providers: [CarsService, CartService, WishListService]
})
export class AppModule { }
