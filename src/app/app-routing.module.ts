import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterDeporteComponent } from './pages/register-deporte/register-deporte.component';
import { EventPageComponent } from './pages/event-page/event-page.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register ', component:RegisterComponent},
  {path:'register-deporte', component:RegisterDeporteComponent},
  {path:'even-page', component:EventPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
