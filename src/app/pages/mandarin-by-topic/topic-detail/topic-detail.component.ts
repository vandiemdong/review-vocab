import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from '../mandarin-by-topic.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  topic: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {
    const topicId = this.route.snapshot.paramMap.get('topicId')!;

    this.topicService.getTopic(topicId).subscribe(res => {
      this.topic = res;
    });
  }

  getPercent(): number {
    if (!this.topic?.totalWords) return 0;
    return Math.round((this.topic.learnedWords / this.topic.totalWords) * 100);
  }

  startLearning() {
    this.router.navigate(['/topic', this.topic.id, 'lessons']);
  }

  goFlashcard() {
    this.router.navigate(['/topic', this.topic.id, 'lesson', 1, 'flashcard']);
  }

  goQuiz() {
    this.router.navigate(['/topic', this.topic.id, 'lesson', 1, 'quiz']);
  }

  goReview() {
    this.router.navigate(['/topic-review']);
  }
}