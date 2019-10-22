import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component( {
  selector: 'item-thumbnail',
  templateUrl: 'item-thumbnail.component.html',
  styles: [ `
    .thumbnail {
      object-fit: cover;
      width: 150px;
      height: 150px;
    }
  `]
} )
export class ItemThumbnailComponent implements OnInit {
  @Input() item;

  expanded: boolean = false;
  fetched: boolean = false;
  gallery: any = [];

  constructor( private apiService: ApiService ) { }

  toggleExpand() {
    if ( !this.fetched ) {
      this.fetched = true;
      this.apiService.getItem( this.item.itemId ).subscribe( res => {
        this.gallery = res.PictureURL;
      } );
    }
    this.expanded = !this.expanded;
  }

  ngOnInit() {
    if ( this.item.galleryURL === undefined ) {
      this.item.galleryURL = [ 'https://thumbs1.ebaystatic.com/pict/04040_0.jpg' ];
    }
  }

}