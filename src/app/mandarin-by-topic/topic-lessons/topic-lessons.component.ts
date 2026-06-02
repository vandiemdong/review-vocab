import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from '../mandarin-by-topic.service';

@Component({
  selector: 'app-topic-lessons',
  templateUrl: './topic-lessons.component.html',
  styleUrls: ['./topic-lessons.component.scss']
})
export class TopicLessonsComponent implements OnInit {
  topicId = '';
  lessons: any[] = [];
  topicName = '';

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {
    this.topicId = this.route.snapshot.paramMap.get('topicId') ?? '';
    if (this.topicId) {
      this.topicService.getTopic(this.topicId).subscribe(res => {
        this.topicName = res.name;
        this.lessons = res.lessons || [];
      });
    }
  }
}
