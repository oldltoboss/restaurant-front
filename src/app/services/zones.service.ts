import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import {environment} from '../config/environment'
import { HttpRequestModel } from "../config/HttpRequest";

@Injectable({
  providedIn: 'root'
})
export class ZonesService {

  constructor(
    private http: HttpClient
  ){
  }

  getAllZones(){
    return this.http.get<HttpRequestModel.Response>(environment.apiBase+'zones').pipe(
      map(resp => resp.data)
    )
  }
  
  saveZone(data){
    return this.http.post<HttpRequestModel.Response>(environment.apiBase+'zones',data).pipe(
      map(resp => resp.data)
    )
  }

  deleteAZone(id){
    return this.http.delete<HttpRequestModel.Response>(environment.apiBase+'zones/'+id).pipe(
      map(resp => resp.data)
    )
  }

}
