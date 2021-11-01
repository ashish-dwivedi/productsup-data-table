import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsModule } from '@ngxs/store';
import { AuthService } from '../../services';
import { NotificationsState } from '../../states';
import { TopBarComponent } from './top-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthServiceMock } from '../../../shared/mock-data';
import { SharedModule } from '../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopBarComponent],
      imports: [
        MatIconTestingModule,
        NgxsModule.forRoot([NotificationsState]),
        RouterTestingModule,
        SharedModule,
        TranslateModule.forRoot(),
      ],
      providers: [{ provide: AuthService, useClass: AuthServiceMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
