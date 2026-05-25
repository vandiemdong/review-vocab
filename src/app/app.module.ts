import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { FlashcardComponent } from './pages/flashcard/flashcard.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ReviewComponent } from './pages/review/review.component';
import { WordCardComponent } from './components/word-card/word-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsComponent,
    FlashcardComponent,
    QuizComponent,
    ReviewComponent,
    WordCardComponent,
    ProgressBarComponent,
    BottomNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
