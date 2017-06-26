import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';

const routes: Routes = [
    {
        path: 'cars/:name', component: CarComponent
    }
];

export const appRouterModule = RouterModule.forRoot(routes);