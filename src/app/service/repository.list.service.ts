import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../model/repository';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RepositoryListService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Repository[]> {
    return this.http.get("https://api.github.com/users/google/repos")
                    .map(res => res )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
