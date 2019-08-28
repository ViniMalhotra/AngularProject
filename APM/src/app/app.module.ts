import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ConvertToSpace } from './shared/convert-to-space.pipe';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ConvertToSpace
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
