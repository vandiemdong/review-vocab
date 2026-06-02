// topic.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TopicService {
  private topicFiles = [
    'food'
  ];

  constructor(private http: HttpClient) {}

  getTopics() {
    return forkJoin(
      this.topicFiles.map(id =>
        this.http.get<any>(`assets/data/topics/${id}.json`)
      )
    );
  }

  getTopic(id: string) {
    return this.http.get<any>(`assets/data/topics/${id}.json`);
  }

  getLesson(topicId: string, lessonId: number) {
    return this.getTopic(topicId).pipe(
      map(topic => ({
        topic,
        lesson: topic.lessons.find((x: any) => x.id === lessonId)
      }))
    );
  }
}