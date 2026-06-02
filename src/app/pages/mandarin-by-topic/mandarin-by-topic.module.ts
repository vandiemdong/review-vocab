import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MandarinByTopicRoutingModule } from './mandarin-by-topic-routing.module';
import { MandarinByTopicComponent } from './mandarin-by-topic.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { LessonCardComponent } from './lesson-card/lesson-card.component';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabItemComponent } from './vocab-item/vocab-item.component';
import { ProgressCardComponent } from './progress-card/progress-card.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicLessonsComponent } from './topic-lessons/topic-lessons.component';
import { TopicLessonComponent } from './topic-lesson/topic-lesson.component';
import { FlashcardComponent } from './topic-flashcard/flashcard.component';
import { QuizComponent } from './topic-quiz/quiz.component';
import { ReviewComponent } from './topic-review/review.component';
import { StatsComponent } from './topic-stats/stats.component';
import { TopicService } from './mandarin-by-topic.service';

@NgModule({
  declarations: [
    MandarinByTopicComponent,
    TopicCardComponent,
    LessonCardComponent,
    VocabListComponent,
    VocabItemComponent,
    ProgressCardComponent,
    ReviewCardComponent,
    TopicDetailComponent,
    TopicLessonsComponent,
    TopicLessonComponent,
    FlashcardComponent,
    QuizComponent,
    ReviewComponent,
    StatsComponent
  ],
  providers: [
      TopicService
    ],
  imports: [
    CommonModule,
    MandarinByTopicRoutingModule
  ]
})
export class MandarinByTopicModule { }
