import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpGitService {
  server_url = 'https://api.github.com/repos/angular/angular/issues?since=';
  data = '';
  constructor(public http: Http) { }
  public FetchData() {
    return this.loaddata();
  }
  loaddata(): Observable<any> {
    // 2017-06-15T15:56:00Z
    let date = new Date();
    date.setDate(date.getDate() - 7);
    this.server_url = this.server_url + date.toISOString();
    console.log(this.server_url);
    return this.http.get(this.server_url) // define a variable server_url to assign the requested url
      .map(this.extractData);
  }
  private extractData(res) {

    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    this.data = res.json();
    return this.data || 'nope';
  }
}
