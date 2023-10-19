import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsrHomeComponent } from './components/usr-home/usr-home.component';
import { UsrMenuComponent } from './utils/usr-menu/usr-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UsrHomeComponent,
    UsrMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
