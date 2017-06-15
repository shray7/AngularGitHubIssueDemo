import { TestBed, inject } from '@angular/core/testing';

import { HttpGitService } from './http-git.service';

describe('HttpGitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGitService]
    });
  });

  it('should be created', inject([HttpGitService], (service: HttpGitService) => {
    expect(service).toBeTruthy();
  }));
});
