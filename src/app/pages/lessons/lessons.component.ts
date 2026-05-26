import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HskService } from '../hsk.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  hsk = 0;

  lessons: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private hskService: HskService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.hsk = +params['hsk'];

      this.loadLessons();

    });

  }

  loadLessons() {

    this.hskService
      .getLessonIndex(this.hsk)
      .subscribe(indexData => {

        const requests = indexData.map((lesson: any) => {

          return this.hskService
            .getLessonWords(this.hsk, lesson.Lesson);

        });

        forkJoin(requests).subscribe(results => {

          this.lessons = indexData.map(
            (lesson: any, index: number) => {

              const words = results[index];

              return {
                ...lesson,

                TotalWords: words.length,

                CompletedWords: 0,

                Progress: 0,

                Locked: false
              };

            });

        });

      });

  }

}
