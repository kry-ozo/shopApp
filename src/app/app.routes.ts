import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShowProductComponent } from './products/show-product/show-product.component';

export const routes: Routes = [
    {
       path: '',
       component:HomeComponent 
    },
    {
        path: 'products',
        component: ProductsComponent,
    },
    {
        path: 'products/:id',
        component: ShowProductComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
