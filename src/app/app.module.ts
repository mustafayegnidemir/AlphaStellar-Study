import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexPageComponent } from './pages/flex-page/flex-page.component';
import { GridPageComponent } from './pages/grid-page/grid-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexPageComponent,
    GridPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
