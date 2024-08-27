import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { Section1Component } from './shared/components/sections/section1/section1.component';
import { Section2Component } from './shared/components/sections/section2/section2.component';
import { CardInfoComponent } from './shared/components/card-info/card-info.component';
import { Section3Component } from './shared/components/sections/section3/section3.component';

import { HttpClientModule } from '@angular/common/http';
import { CurrencyNoDecimalPipe } from './shared/pipes/currency-no-decimal.pipe';
import { SectionExploreComponent } from './shared/components/sections/section-explore/section-explore.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    MenuComponent,
    Section1Component,
    Section2Component,
    CardInfoComponent,
    Section3Component,
    CurrencyNoDecimalPipe,
    SectionExploreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ButtonComponent,
    HeaderComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
