import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable()
export class ApiService {
  constructor( private httpClient: HttpClient ) { };

  searchItems( queryForm: IQuery ): any {
    const options = { 'params': new HttpParams().set( 'query', queryForm.query ) };

    // Set optional params
    if ( queryForm.page != null ) {
      options.params = options.params.set( 'page', '' + queryForm.page );
    }
    if ( queryForm.sortBy != null ) {
      options.params = options.params.set( 'sortBy', queryForm.sortBy );
    }
    if ( queryForm.listType != null ) {
      options.params = options.params.set( 'listType', queryForm.listType );
    }

    return this.httpClient.get( environment.baseUrl + 'search', options ).pipe( tap( res => console.log( res ) ) );
  }

  getItem( id: string ): any {
    return this.httpClient.get( environment.baseUrl + 'item/' + id ).pipe( tap( res => console.log( res ) ) );
  }
}

export interface IQuery {
  query: string,
  page?: number,
  sortBy?: string,
  listType?: string
}