import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RepositoryListService } from './service/repository.list.service';

import { RepositoryListComponent } from './repository.list/repository.list.component';

@NgModule({
  declarations: [
    RepositoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RepositoryListService],
  bootstrap: [RepositoryListComponent]
})
export class AppModule { }
