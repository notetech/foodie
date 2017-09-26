import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';

export const routes: Routes = [
    {
      path: "",  component: HomeComponent
    },
    {
      path: 'checkout', component: CheckoutComponent
    }
];

