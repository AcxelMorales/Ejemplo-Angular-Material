import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Photo from '../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private URI: string = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

  constructor(private service: HttpClient) { }

  public getPhotos(): Observable<any> {
    return this.service.get<Photo[]>(this.URI);
  }
}
