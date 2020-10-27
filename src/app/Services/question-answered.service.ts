import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QuestionAnswered } from './../Models/QuestionAnswered';


@Injectable({
  providedIn: 'root'
})
export class QuestionAnsweredService {

  baseUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }

  questionAnswered(qa: QuestionAnswered): Observable<any> {
    return this.http.post(`${this.baseUrl}/questionanswered`, qa);
  }

}
