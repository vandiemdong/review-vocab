import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HskService, HskWord } from '../hsk.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {
  hsk = 0;
  lesson = 0;

  words: HskWord[] = [];
  currentIndex = 0;
  flipped = false;

  constructor(
    private route: ActivatedRoute,
    private hskService: HskService
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.hsk = +params['hsk'];
      this.lesson = +params['lesson'];

      await this.loadWords();
    });
  }

  async loadWords() {
    const data = await firstValueFrom(this.hskService.getLessonWords(this.hsk, this.lesson));
    this.words = data;
    this.currentIndex = 0;
    this.flipped = false;
  }

  get currentWord(): HskWord | null {
    return this.words.length ? this.words[this.currentIndex] : null;
  }

  next() {
    if (this.currentIndex < this.words.length - 1) {
      this.currentIndex++;
      this.flipped = false;
    }
  }
}