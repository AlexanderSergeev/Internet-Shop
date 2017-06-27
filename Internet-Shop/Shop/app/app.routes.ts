import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './cars/car.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wishlist/wishlist.component';

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
        path: 'cars', component: CarsComponent,
        children: [
            { path: ':id', component: CarComponent }
        ]
    }
];

export const appRouterModule = RouterModule.forRoot(routes);