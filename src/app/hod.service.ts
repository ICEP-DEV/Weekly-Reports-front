import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HodService {

  constructor(private http: HttpClient) { }

  getReports(id){
    return this.http.get('http://168.172.190.54:4041/hod/hodReport/' + id);

  }

  hodDash(id){
    return this.http.get('http://168.172.190.54:4041/hod/hodDashboard/' + id);
  }

  hodDashMod(id){
    return this.http.get('http://168.172.190.54:4041/hod/subjectCode/' + id);
  }

}
