import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HskWord {
  Hsk: number;
  Lesson: number;
  HanZi: string;
  Pinyin: string;
  MeaningVi: string;
  ExampleCn: string;
  ExamplePy: string;
  ExampleVi: string;
}

@Injectable({
  providedIn: 'root'
})
export class HskService {
  constructor(private http: HttpClient) {}

  getLessonWords(hsk: number, lesson: number): Observable<HskWord[]> {
    return this.http.get<HskWord[]>(
      `assets/data/hsk${hsk}/lesson_${lesson}.json`
    );
  }
}