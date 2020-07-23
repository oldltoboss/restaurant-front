import { Routes } from '@angular/router'
import { TableComponent } from './components/tables/tables.component'


export const ROUTES: Routes = [
    {
        path: 'tables',
        component:TableComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tables'

    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'tables'
    }
]