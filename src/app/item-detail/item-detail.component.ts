import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService, IItem } from '../common/api.service';

@Component( {
  selector: 'item-detail',
  templateUrl: 'item-detail.component.html',
  styleUrls: [ 'item-detail.component.css' ]
} )
export class ItemDetailComponent implements OnInit {

  item: IItem;

  constructor( private apiService: ApiService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.apiService.getItem( this.activatedRoute.snapshot.params[ 'id' ] ).subscribe( res => {
      this.item = res;
    } );
  }
}