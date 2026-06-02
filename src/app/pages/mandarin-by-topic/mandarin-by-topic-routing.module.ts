import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MandarinByTopicComponent } from './mandarin-by-topic.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicLessonsComponent } from './topic-lessons/topic-lessons.component';
import { TopicLessonComponent } from './topic-lesson/topic-lesson.component';
import { FlashcardComponent } from './topic-flashcard/flashcard.component';
import { QuizComponent } from './topic-quiz/quiz.component';
import { ReviewComponent } from './topic-review/review.component';
import { StatsComponent } from './topic-stats/stats.component';

const routes: Routes = [
  { path: '', component: MandarinByTopicComponent },
  { path: 'topic/:topicId', component: TopicDetailComponent },
  { path: 'topic/:topicId/lessons', component: TopicLessonsComponent },
  { path: 'topic/:topicId/lesson/:lessonId', component: TopicLessonComponent },
  { path: 'topic/:topicId/lesson/:lessonId/flashcard', component: FlashcardComponent },
  { path: 'topic/:topicId/lesson/:lessonId/quiz', component: QuizComponent },
  { path: 'topic-review', component: ReviewComponent },
  { path: 'topic-stats', component: StatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MandarinByTopicRoutingModule { }
