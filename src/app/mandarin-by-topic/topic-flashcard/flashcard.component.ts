import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from '../mandarin-by-topic.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {
  topic: any;
  lesson: any;
  words: any[] = [];

  currentIndex = 0;
  showMeaning = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {
    const topicId = this.route.snapshot.paramMap.get('topicId')!;
    const lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));

    this.topicService.getLesson(topicId, lessonId).subscribe(res => {
      this.topic = res.topic;
      this.lesson = res.lesson;
      this.words = res.lesson.words;
    });
  }

  get currentWord() {
    return this.words[this.currentIndex];
  }

  get progressPercent(): number {
    if (!this.words.length) return 0;
    return ((this.currentIndex + 1) / this.words.length) * 100;
  }

  toggleCard() {
    this.showMeaning = !this.showMeaning;
  }

  markUnknown() {
    this.nextCard();
  }

  markKnown() {
    this.nextCard();
  }

  nextCard() {
    this.showMeaning = false;

    if (this.currentIndex < this.words.length - 1) {
      this.currentIndex++;
    } else {
      this.router.navigate(['mandarin-topic/topic', this.topic.id]);
    }
  }

  close() {
    this.router.navigate(['mandarin-topic/topic', this.topic.id]);
  }

  playSound(event: Event) {
    event.stopPropagation();
    // sau này gắn audio ở đây
  }
}