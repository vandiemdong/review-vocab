import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from '../mandarin-by-topic.service';

@Component({
  selector: 'app-topic-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  topicId = '';
  lessonId = 0;
  questions: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {
    this.topicId = this.route.snapshot.paramMap.get('topicId') ?? '';
    this.lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
    if (this.topicId && this.lessonId) {
      this.topicService.getLesson(this.topicId, this.lessonId).subscribe(res => {
        this.questions = res.lesson?.quiz || [];
      });
    }
  }
}
