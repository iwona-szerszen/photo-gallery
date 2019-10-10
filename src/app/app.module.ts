import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActivePhotoComponent } from './active-photo/active-photo.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    GalleryComponent,
    ActivePhotoComponent,
    UploadPhotoComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
