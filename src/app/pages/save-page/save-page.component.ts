import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {downloadFile} from '../../utils/downloadFile';
import {AppFacadeService} from '../../../store/facades';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-save-page',
  templateUrl: './save-page.component.html',
  styleUrls: ['./save-page.component.scss'],
})

export class SavePageComponent implements OnInit, OnDestroy {
  saveForm: FormGroup = new FormGroup({
    fileName: new FormControl('', Validators.required),
  });

  textPreview = '';
  componentDestroyed$ = new Subject<void>();

  constructor(private appFacade: AppFacadeService, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.appFacade.textPreview$.pipe(takeUntil(this.componentDestroyed$)).subscribe((text: string) => {
      this.textPreview = text;
    });
  }

  onSubmit(): void {
    downloadFile(this.textPreview, this.saveForm.controls.fileName.value);
    this.appFacade.setHistory(this.saveForm.controls.fileName.value, this.textPreview);
  }

  goBack(): void {
    this.location.back();
  }

  onClick(): void {
    this.router.navigate(['/history']);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
