import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.pord';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  BaseApI = environment.baseApi
  constructor(private http: HttpClient) { }

  GetAllWashes() {
    const Body = {
      "Id": 6
    }
    return this.http.post(`${this.BaseApI}CarWashes/GetCarWashDataTest`, Body);
  }

  getCarWashData(SkipCount: any, MaxResultCount: any): Observable<any> {
    const body = {
      "MaxCount": false,
      "SkipCount": SkipCount,
      "MaxResultCount": MaxResultCount,
      "CurrentLongitude": 32.22222,
      "CurrentLatitude": 36.524,
      "FilterBy": 1
    };
    return this.http.post(`${this.BaseApI}CarWashes/GetCarWashes`, body);
  }





  UpdateDataAashes(data: any) {
    return this.http.post(`${this.BaseApI}CarWashes/UpdateCarWashDataTest`, data);

  }

}


 // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });
