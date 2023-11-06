import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLogimComponent } from './componente/form-logim/form-logim.component';
import { LoginComponent } from './paginas/login/login.component';
import { HeaderComponent } from './componente/header/header.component';
import { NavBarComponent } from './componente/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLogimComponent,
    LoginComponent,
    HeaderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
