import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { ChangeModalComponent } from './change-modal/change-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { BulkUploadModalComponent } from './bulk-upload-modal/bulk-upload-modal.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    LoginComponent,
    AssignProjectComponent,
    ChangeModalComponent,
    DeleteModalComponent,
    BulkUploadModalComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
