import { Component, OnInit } from '@angular/core';
import { HttpGitService } from '../http-git.service';
import { IssueComponent } from '../issue/issue.component';
import {Issue} from '../issue'
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  isItemVisible = true;
  issues: Issue[];
  constructor(private httpService: HttpGitService) {
    this.issues = new Array<Issue>();
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.httpService.FetchData().subscribe(d => {
      for (let entry of d){
        let issue = new Issue();
        issue.title = entry['title'];
        issue.body = entry['body'];
        issue.userLogin = entry['user']['login'];
        if (entry['assignee'] != null ) {
          console.log(entry['assignee']);
          issue.assigneeLogin = entry['assignee']['login'];
        }else {
          issue.assigneeLogin = 'None';
        }
        this.issues.push(issue);
      }
    });
    setInterval(() => this.isItemVisible = false, 1000);
  }


}
