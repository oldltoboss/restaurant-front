import { Routes } from '@angular/router'
import { TableComponent } from './components/tables/tables.component'
import { ZoneComponent } from './components/zones/zones.component'


export const ROUTES: Routes = [
    {
        path: 'tables',
        component:TableComponent
    },
    {
        path: 'zones',
        component:ZoneComponent
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