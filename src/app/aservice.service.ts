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
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }
}
