import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './core/components/button/button.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ContentComponent } from './core/components/content/content.component';
import { CardComponent } from './core/components/card/card.component';
import { TerminalComponent } from './core/components/terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    ContentComponent,
    CardComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
