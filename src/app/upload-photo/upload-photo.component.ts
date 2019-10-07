import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import uuid from 'uuidv4';
import { PhotosService } from '../photos.service';
import { FileContent, readFileContent } from '../read-file-content';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
  }

  handleFileInput(images: File[]) {
    const imagesCollection = Array.from(images);
    const imagesContent: Array<Promise<FileContent>> = imagesCollection.map(file => readFileContent(file));

    const uploadedImages$ = forkJoin(imagesContent).pipe(map(imagesSources => {
      const imagesWithSource  = imagesCollection.map(
        (image, index) => ({
          name: image.name,
          id: uuid(),
          url: imagesSources[index]
        })
      );
      return imagesWithSource;
    }));

    uploadedImages$.subscribe(photos => this.photosService.newPhotos$.next(photos));
  }

}
