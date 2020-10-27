import { TestBed } from '@angular/core/testing';

import { QuestionAnsweredService } from './question-answered.service';

describe('QuestionAnsweredService', () => {
  let service: QuestionAnsweredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionAnsweredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
