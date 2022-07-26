import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentes/header/header.component';
import { CardPerfilComponent } from './componentes/card-perfil/card-perfil.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewHabilidadComponent } from './componentes/habilidades/new-habilidad.component';
import { EdiHabilidadComponent } from './componentes/habilidades/edi-habilidad.component';
import { EditHabilidadDComponent } from './componentes/habilidades/edit-habilidad-d.component';
import { NewHabilidadDComponent } from './componentes/habilidades/new-habilidad-d.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { EditRedesComponent } from './componentes/edit-redes/edit-redes.component';
import { EditarRedComponent } from './componentes/edit-redes/editar-red.component';
import { NuevaRedComponent } from './componentes/edit-redes/nueva-red.component';
import { NuevoContactoComponent } from './componentes/edit-redes/nuevo-contacto.component';
import { EditarContactoComponent } from './componentes/edit-redes/editar-contacto.component';
import { EditarPerfilComponent } from './componentes/card-perfil/editar-perfil.component';
import { RequestlogComponent } from './componentes/home/requestlog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardPerfilComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewHabilidadComponent,
    EdiHabilidadComponent,
    EditHabilidadDComponent,
    NewHabilidadDComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EditRedesComponent,
    EditarRedComponent,
    NuevaRedComponent,
    NuevoContactoComponent,
    EditarContactoComponent,
    EditarPerfilComponent,
    RequestlogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    PorfolioService, 
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
