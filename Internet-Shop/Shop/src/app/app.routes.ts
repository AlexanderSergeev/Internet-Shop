import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarComponent } from './car.component';

// Route config let's you map routes to components
const routes: Routes = [
    // map '/persons' to the people list component
    {
        path: 'cars',
        component: AppComponent
    },

    {
        path: 'cars/:name',
        component: CarComponent
    },
    // map '/' to '/persons' as our default route
    {
        path: '',
        redirectTo: '/cars',
        pathMatch: 'full'
    },
];

export const appRouterModule = RouterModule.forRoot(routes);