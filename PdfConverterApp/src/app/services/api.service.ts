import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "https://localhost:7181/api/Conversion/topdf";

  constructor(private http: HttpClient) {}

  convert(formData: FormData) {
    return this.http.post(this.baseUrl, formData, { responseType: 'blob' });
  }
}
