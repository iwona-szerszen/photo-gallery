import { Component, OnInit,OnDestroy } from '@angular/core';
import { Photo } from '../photo';
import { Observable } from 'rxjs';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-active-photo',
  templateUrl: './active-photo.component.html',
  styleUrls: ['./active-photo.component.scss']
})
export class ActivePhotoComponent implements OnInit, OnDestroy {

  photo: Photo;

  photoSubscription = this.photosService.activePhoto$.subscribe(photo => {
    this.photo = photo;
  });

  activePhoto$: Observable<Photo> = this.photosService.activePhoto$;

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
  }

  hidePhoto() {
    this.photosService.activePhotoID$.next(this.photosService.noPhotoID);
  }

  ngOnDestroy() {
    this.photoSubscription.unsubscribe();
  }
}
