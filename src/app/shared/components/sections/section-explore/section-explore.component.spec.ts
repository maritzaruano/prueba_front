import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionExploreComponent } from './section-explore.component';

describe('SectionExploreComponent', () => {
  let component: SectionExploreComponent;
  let fixture: ComponentFixture<SectionExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionExploreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
