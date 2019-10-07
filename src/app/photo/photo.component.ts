import { Component, Input, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  @Input() photo: { description: string };

  ngOnInit() {
  }

  onPhotoClick(photoID: string) {
    this.photosService.activePhotoID$.next(photoID);
  }

}
