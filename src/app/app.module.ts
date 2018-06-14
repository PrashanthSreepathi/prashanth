import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MaterializeModule} from 'angular2-materialize';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { ResourcesComponent } from './resources/resources.component';
import {RouterModule, Routes} from '@angular/router';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  {path: 'aboutme', component: AboutmeComponent },
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: '**', redirectTo: '/aboutme'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutmeComponent,
    ContactComponent,
    ResourcesComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
