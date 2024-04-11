import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import path from 'path';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'add',
        component:AddComponent
    },
    {
        path:'view',
        component:ViewComponent
    }
   
];
