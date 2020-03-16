import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {APP_BASE_HREF} from "@angular/common";
import {environment} from "../environments/environment";
import {MatTableModule} from "@angular/material/table";
import {BookListComponent} from './book/book-list/book-list.component';
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "./book/service/book.service";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    FlexModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: environment.BASE_PATH},
    BookService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
