import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {BookListComponent} from './book/book-list/book-list.component';
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "./book/service/book.service";
import {MatListModule} from "@angular/material/list";
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {BookItemComponent} from './book/book-item/book-item.component';
import {MatIconModule} from "@angular/material/icon";
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {BookFilterPipe} from './book/filter/book-filter.pipe';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {BookEffects} from "./store/effects/book-effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {CartComponent} from './cart/cart.component';
import {reducers} from "./store/root-state";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HeaderComponent,
    BookItemComponent,
    BookDetailComponent,
    BookFilterPipe,
    CartComponent,
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
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
