import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { ColorDirective } from './color.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    FormsComponent,
    DateCountPipe,
    HighlightDirective,
    ColorDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
