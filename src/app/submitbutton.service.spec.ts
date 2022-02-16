import { TestBed } from '@angular/core/testing';

import { SubmitbuttonService } from './submitbutton.service';

describe('SubmitbuttonService', () => {
  let service: SubmitbuttonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitbuttonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
