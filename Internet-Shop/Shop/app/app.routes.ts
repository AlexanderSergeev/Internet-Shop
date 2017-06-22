import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car.component';

// Route config let's you map routes to components
const routes: Routes = [
    {
        path: 'cars/:name', component: CarComponent
    }
];

export const appRouterModule = RouterModule.forRoot(routes);