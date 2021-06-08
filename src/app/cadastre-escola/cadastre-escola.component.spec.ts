import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastreEscolaComponent } from './cadastre-escola.component';

describe('CadastreEscolaComponent', () => {
  let component: CadastreEscolaComponent;
  let fixture: ComponentFixture<CadastreEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastreEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastreEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
