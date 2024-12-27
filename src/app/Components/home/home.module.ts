import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { ServicesComponent } from './home/services/services.component';
import { DilogUpdateComponent } from './home/dilog-update/dilog-update.component';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    DilogUpdateComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PaginatorModule,
    DialogModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
