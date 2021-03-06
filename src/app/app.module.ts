import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerCreateComponent } from './server-create/server-create.component';
import { ServerListComponent } from './server-list/server-list.component';
import { basicDirective } from './custom-directive/basic-directives.directive';
import { betterDirective } from './custom-directive/better-directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerCreateComponent,
    ServerListComponent,
    basicDirective,
    betterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
