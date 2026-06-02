import { Component, OnInit } from '@angular/core';
import { TopicService } from '../mandarin-by-topic.service';

@Component({
  selector: 'app-topic-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  reviewSets: any[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(res => {
      this.reviewSets = res.map((topic: any) => ({
        topic: topic.name,
        count: topic.totalWords || 0
      }));
    });
  }
}
