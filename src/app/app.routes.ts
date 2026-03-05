import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products/all'
    },
    {
        path: 'products/:category',
        loadComponent: () => import('./pages/products-grid/products-grid').then(m => m.ProductsGrid)
    },
    {
        path: 'wishlist',
        loadComponent: () => import('./pages/my-wishlist/my-wishlist').then(m => m.MyWishlist)
    },
    {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart').then(m => m.Cart)
    },
    {
        path: 'checkout',
        loadComponent: () => import('./pages/checkout/checkout').then(m => m.Checkout)
    },
    {
        path: 'order-success',
        loadComponent: () => import('./pages/order-success/order-success').then(m => m.OrderSuccess)
    },
    {
        path: 'product/:id',
        loadComponent: () => import('./pages/product-view/product-view').then(m => m.ProductView)
    },
    
    {
        path: '**',
        redirectTo: ''  
    }
];
