import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './features/contact/pages/contact-page/contact-page.component';
import { LoginPageComponent } from './features/login/login-page/login-page.component';
import { ProductPageComponent } from './features/products/pages/product-page/product-page.component';
import { RegisterPageComponent } from './features/register/register-page/register-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/produtos' },
  { path: 'produtos', component: ProductPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'cadastro', component: RegisterPageComponent },
  { path: 'contato', component: ContactPageComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
