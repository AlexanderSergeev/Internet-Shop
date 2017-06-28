import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './cars/car.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wishlist/wishlist.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'cars', pathMatch: 'full'
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'wishlist', component: WishListComponent
    },
    {
        path: 'purchase', component: PurchaseComponent
    },
    {
        path: 'cars', component: CarsComponent,
        children: [
            { path: ':id', component: CarComponent }
        ]
    }
];

export const appRouterModule = RouterModule.forRoot(routes);