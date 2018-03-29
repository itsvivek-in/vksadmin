import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { EditorModule } from '@tinymce/tinymce-angular';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { PluginsComponent } from './components/plugins/plugins.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'widgets',
    component: WidgetsComponent,
  },
  {
    path: 'plugins',
    component: PluginsComponent,
  },
  {
    path: 'documentation',
    component: DocumentationComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetsComponent,
    DocumentationComponent,
    PluginsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    EditorModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
