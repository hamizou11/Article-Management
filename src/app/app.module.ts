import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { ArticalAddComponent } from './artical-add/artical-add.component'; 
import {MatDatepickerModule} from '@angular/material/datepicker';






import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


const appRoutes :Routes=[ { path :'adds', component:ArticalAddComponent}]
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DialogComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    QuillModule.forRoot(),
    BrowserAnimationsModule
   

  
 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
