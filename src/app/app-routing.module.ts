import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CardComponent } from './component/card/card.component';
import { ThemeComponent } from './component/theme/theme.component';
import { AddCardComponent } from './component/add-card/add-card.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'card', component: CardComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'add-card/:id', component: AddCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
