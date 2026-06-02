import { Component, OnInit } from '@angular/core';
import { TopicService } from '../mandarin-by-topic.service';

@Component({
  selector: 'app-topic-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  stats: any[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(res => {
      this.stats = res.map((topic: any) => ({
        name: topic.name,
        progress: topic.totalWords ? Math.round((topic.learnedWords / topic.totalWords) * 100) : 0
      }));
    });
  }
}
