import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatButtonModule,
  MatCardModule,
  MatMenuModule, 
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatTableModule,
  MatGridListModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSortModule,
  MatRadioModule,
  MatDividerModule,
  MatListModule
  } from '@angular/material';


import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { GlobalEntrepreneurComponent } from './global-entrepreneur/global-entrepreneur.component';
import { PrerequisitesComponent } from './prerequisites/prerequisites.component';
import { VisaAndLogisticsComponent } from './visa-and-logistics/visa-and-logistics.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    GlobalEntrepreneurComponent,
    PrerequisitesComponent,
    VisaAndLogisticsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
