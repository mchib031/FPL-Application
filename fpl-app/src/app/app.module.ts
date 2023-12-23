import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './components/team-component/team.component';
import { TeamFacade } from './facades/team.facade';
import { UserFacade } from './facades/user.facade';
import { PlayerFacade } from './facades/player.facade';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TeamComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TeamFacade, UserFacade, PlayerFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
