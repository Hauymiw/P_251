import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { HeaderComponent } from './header/header.component';
import { HandleAccountComponent } from './handle-account/handle-account.component';
import { AccoutDetailsComponent } from './accout-details/accout-details.component';

export const routes: Routes = [
    {path: '' ,redirectTo: 'login' , pathMatch: 'full'} ,
    {path: 'login' , component: LoginPageComponent} ,
    {path: 'menu', component: MenuPageComponent} ,
    {path: 'header', component: HeaderComponent} ,
    {path: 'Handle-account', component: HandleAccountComponent} ,
    {path: 'account-detail', component: AccoutDetailsComponent} ,
];
