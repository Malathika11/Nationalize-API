import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  apicall(reqData:any)
  {
    const url = 'https://api.nationalize.io/?name=';
    return this.http.get(url+reqData);
  }
}
