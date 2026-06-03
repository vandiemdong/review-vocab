import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from '../mandarin-by-topic.service';

type ReviewTab = 'all' | 'later' | 'known';

interface ReviewWord {
  hanzi: string;
  pinyin: string;
  meaningVi: string;
  audioUrl?: string;
  status: 'later' | 'known';
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  selectedTab: ReviewTab = 'all';

  words: ReviewWord[] = [
    {
      hanzi: '米饭',
      pinyin: 'mǐ fàn',
      meaningVi: 'cơm',
      status: 'later'
    },
    {
      hanzi: '面条',
      pinyin: 'miàn tiáo',
      meaningVi: 'mì / bún',
      status: 'later'
    },
    {
      hanzi: '牛肉',
      pinyin: 'niú ròu',
      meaningVi: 'thịt bò',
      status: 'known'
    },
    {
      hanzi: '水果',
      pinyin: 'shuǐ guǒ',
      meaningVi: 'trái cây',
      status: 'known'
    },
    {
      hanzi: '咖啡',
      pinyin: 'kā fēi',
      meaningVi: 'cà phê',
      status: 'later'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private topicService: TopicService
  ) { }

  ngOnInit(): void {
    const topicId = this.route.snapshot.paramMap.get('topicId')!;
    const lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));

    this.topicService.getLesson(topicId, lessonId).subscribe(res => {
      // this.topic = res.topic;
      // this.lesson = res.lesson;
      this.words = res.lesson.words;
    });
  }

  get allCount(): number {
    return this.words.length;
  }

  get laterCount(): number {
    return this.words.filter(x => x.status === 'later').length;
  }

  get knownCount(): number {
    return this.words.filter(x => x.status === 'known').length;
  }

  get filteredWords(): ReviewWord[] {
    if (this.selectedTab === 'all') {
      return this.words;
    }

    return this.words.filter(x => x.status === this.selectedTab);
  }

  setTab(tab: ReviewTab): void {
    this.selectedTab = tab;
  }

  playAudio(word: ReviewWord): void {
    if (word.audioUrl) {
      const audio = new Audio(word.audioUrl);
      audio.play();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(word.hanzi);
    utterance.lang = 'zh-CN';
    speechSynthesis.speak(utterance);
  }
}