import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ComLoginComponent } from './component/com-login/com-login.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component'
import { EventPageComponent } from './pages/event-page/event-page.component';
import { FormRegisterDeporteComponent } from './component/form-register-deporte/form-register-deporte.component';
import { RegisterDeporteComponent } from './pages/register-deporte/register-deporte.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { ExploreComponent } from './pages/explore/explore.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { EventComponent } from './sahred/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    ComLoginComponent,
    LoginComponent,
    HeaderComponent,
    NavBarComponent,
    EventPageComponent,
    FormRegisterDeporteComponent,
    RegisterDeporteComponent,
    FormRegisterComponent,
    RegisterComponent,
    ExploreComponent,
    PerfilComponent,
    AjustesComponent,
    EditarPerfilComponent,
    FormRegisterComponent,
    FormRegisterDeporteComponent,
    EventComponent
  ],

  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
