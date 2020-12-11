import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AserviceService {
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  // return what comes back from this http call
  getUsers() {
    return this.http.get(`${this.apiUrl}?q=tom+repos:%3E42+followers:%3E1000&per_page=15`);
  }
}
