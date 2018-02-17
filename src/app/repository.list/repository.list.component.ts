import { Component, OnInit } from '@angular/core';
import { Repository } from '../model/repository';
import { RepositoryListService } from '../service/repository.list.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository.list.component.html',
  styleUrls: ['./repository.list.component.css']
})
export class RepositoryListComponent implements OnInit {

  constructor(private repositoryListService:RepositoryListService) { }

  repoList: Repository[];

  ngOnInit() {
    this.repositoryListService
                      .getList()
                      .subscribe(
                            repos => this.repoList = repos,
                            error => {
                               console.log(error);
                            });
  }
}
