import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(private http: HttpClient) { }
  getSubjects(){
    return this.http.get("http://localhost:4041/lecture/getModules")
  }

  getSubject(Id){
    return this.http.get("http://localhost:4041/lecture/getModules/" + Id)
  }

  getLectuerInfo(){
    return this.http.get("http://localhost:4041/lecture/selectedModule")
    }
  

  createReport(body:any){
    return this.http.post("http://localhost:4041/lecture/report",body,{
      observe:'body'
    })
  
  }
}