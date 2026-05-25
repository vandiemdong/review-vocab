import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { FlashcardComponent } from './pages/flashcard/flashcard.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hsk/:hsk/lessons', component: LessonsComponent },
  { path: 'hsk/:hsk/lesson/:lesson/flashcard', component: FlashcardComponent },
  { path: 'hsk/:hsk/lesson/:lesson/quiz', component: QuizComponent },
  { path: 'review', component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
