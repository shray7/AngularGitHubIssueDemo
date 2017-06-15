import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { IssueComponent } from './issue/issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import {HttpGitService} from '../app/http-git.service';


@NgModule({
  declarations: [
    AppComponent,
    IssueComponent,
    IssueListComponent,
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [HttpGitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
