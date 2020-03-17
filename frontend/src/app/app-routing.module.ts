import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./book/book-list/book-list.component";
import {BookDetailComponent} from "./book/book-detail/book-detail.component";


const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'book/:id',
    component: BookDetailComponent
  },
  {
    path: '**',
    component: BookListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
