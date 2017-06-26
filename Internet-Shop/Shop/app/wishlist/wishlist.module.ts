import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { WishListComponent } from './wishlist.component';
import { DataService } from "../shared/data.service";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [WishListComponent],
    bootstrap: [WishListComponent],
    providers: [DataService]
})
export class WishListModule { }