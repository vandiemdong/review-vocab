import { Component, OnInit } from '@angular/core';
import { TopicService } from './mandarin-by-topic.service';

@Component({
  selector: 'app-mandarin-by-topic',
  templateUrl: './mandarin-by-topic.component.html',
  styleUrls: ['./mandarin-by-topic.component.scss']
})
export class MandarinByTopicComponent implements OnInit {
  topics: any[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(res => {
      this.topics = res;
    });
  }

  getPercent(topic: any): number {
    if (!topic.totalWords) return 0;
    return Math.round((topic.learnedWords / topic.totalWords) * 100);
  }
}
