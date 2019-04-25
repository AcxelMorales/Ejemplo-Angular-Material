import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../../services/photos.service';

import Photo from '../../models/Photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private servicio: PhotosService) { }

  ngOnInit(): void {
    this.servicio.getPhotos()
      .subscribe(
        resp => {
          this.photos = resp;
          console.log(this.photos);
        },
        err => console.log(err)
      )
  }

}
