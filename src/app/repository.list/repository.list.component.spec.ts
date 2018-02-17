import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import { Repository } from '../model/repository';
import { RepositoryListService } from '../service/repository.list.service';
import { RepositoryListComponent } from './repository.list.component';

describe('Repository.List.Component', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;
  let repositoryListService: RepositoryListService;
  let testData: Repository[] = [
    new Repository("Test Project",
            "http://www.test.com/test",
            "Just a test project",
            100,
            200)
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoryListComponent],
      providers: [RepositoryListService],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    repositoryListService = TestBed.get(RepositoryListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows list of github project for Google when there is any', () => {
    let getRepoList = spyOn(repositoryListService, 'getList').and.returnValue(
      Observable.of(testData)
    );

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.repoList).toEqual(testData);
  });

  it('shows nothing when there is an error', () => {
    let getRepoList = spyOn(repositoryListService, 'getList').and.returnValue(
        new Observable(subscriber => {
          subscriber.error("Some error!!!");
        })
    );

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.repoList).not.toBeTruthy();
  });
});
