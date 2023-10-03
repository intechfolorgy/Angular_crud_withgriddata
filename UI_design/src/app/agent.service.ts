import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService implements OnInit {

  // login: any;
   url = "http://localhost:3000";
  constructor(private http: HttpClient) {}
  ngOnInit(): void { }


  register(data: any) {
    return this.http.post("http://localhost:3000/users", data);
  }

  Login(data: any) {
    return this.http.post("http://localhost:3000/users", data)
  }

  update(id: any, data: any) {
    console.log(id, data);
    return this.http.patch("http://localhost:3000/users/"+id, data);
  }

  delete(id: any) {
    return this.http.delete("http://localhost:3000/users/"+id);
  }

  fetchAllemp() {
    return this.http.get<any[]>("http://localhost:3000/users");
  }

}
