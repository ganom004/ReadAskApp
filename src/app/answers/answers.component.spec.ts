// import necessary testing utilities from Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnswersComponent } from './answers.component';
// import the component that is being tested
describe('AnswersComponent', () => {
  let component: AnswersComponent;
  let fixture: ComponentFixture<AnswersComponent>;
// define a test suite for the answer component
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersComponent ]
    })
    .compileComponents();
  });
//this block sets up the component for testing
  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//define a test case named 'should create'
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
