import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import {environment} from '../config/environment'
import { HttpRequestModel } from "../config/HttpRequest";

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(
    private http: HttpClient
  ){
  }

  getAllTables(){
    return this.http.get<HttpRequestModel.Response>(environment.apiBase+'tables').pipe(
      map(resp => resp.data)
    )
  }
  
  deleteATable(id){
    return this.http.delete<HttpRequestModel.Response>(environment.apiBase+'tables/'+id).pipe(
      map(resp => resp.data)
    )
  }
  
  saveATables(data:any){
    return this.http.post<HttpRequestModel.Response>(environment.apiBase+'tables', data).pipe(
      map(resp => resp.data)
    )
  }

}
