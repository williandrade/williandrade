import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IntroComponent } from './section/intro/intro.component';
import { ExperiencesComponent } from './section/experiences/experiences.component';
import { ExperienceCardComponent } from './section/experiences/experience-card/experience-card.component';
import { RecomendationsComponent } from './section/recomendations/recomendations.component';
import { RecomendationCardComponent } from './section/recomendations/recomendation-card/recomendation-card.component';
import { AboutComponent } from './section/about/about.component';
import { LinksComponent } from './section/links/links.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    ExperiencesComponent,
    ExperienceCardComponent,
    RecomendationsComponent,
    RecomendationCardComponent,
    AboutComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
