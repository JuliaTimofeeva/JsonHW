import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppFacadeService } from '../../../store/facades';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss'],
})

export class AppInputPageComponent implements OnInit, OnDestroy {
  testData = {
    json: '{\n' +
      '"name": "Lucas",\n' +
      '"friend_name": "Kaly",\n' +
      '"language": "English"\n' +
      '}',
    text: '%name% goes to school every day of the week. He has many subjects to go to each school day: %language%, art, science, mathematics, gym, and history. His mother packs a big backpack full of books and lunch for %name%.\n' +
      '\n' +
      'His first class is %language%, and he likes that teacher very much. His %language% teacher says that he is a good pupil, which %name% knows means that she thinks he is a good student.\n' +
      '\n' +
      'His next class is art. He draws on paper with crayons and pencils and sometimes uses a ruler. %name% likes art. It is his favorite class.\n' +
      '\n' +
      'His third class is science. This class is very hard for %name% to figure out, but he gets to work with his classmates a lot, which he likes to do. His friend, %friend_name%, works with %name% in science class, and they have fun.'
  };

  componentDestroyed$ = new Subject<void>();

  form: FormGroup = new FormGroup({
    inputText: new FormControl('', Validators.required),
    inputJson: new FormControl(null, [Validators.required, Validators.pattern(/^\s*\{\s*["'A-Z0-9._]+\s*:\s*["'A-Z0-9._]+\s*(,\s*["'A-Z0-9._]+\s*:\s*["'A-Z0-9._]+\s*)*\}\s*$/i)])
  });
  result = '';

  constructor(private appFacade: AppFacadeService, private router: Router) {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe((res) => {
      this.appFacade.setCurrentValue(res);
    });
    this.appFacade.currentValue$.pipe(takeUntil(this.componentDestroyed$)).subscribe((res: any) => {
      if (this.form.controls.inputText.value === res.inputText && this.form.controls.inputJson.value === res.inputJson) {
        return;
      }
      this.form.controls.inputText.setValue(res.inputText);
      this.form.controls.inputJson.setValue(res.inputJson);
      this.onInput();
    });
  }

  onClick(): void {
    this.router.navigate(['/save']);
  }
  onInput(): void {
    if (this.form.valid) {
      const json = JSON.parse(this.form.controls.inputJson.value);
      this.result = this.form.controls.inputText.value.replace(/%\w+%/g, (matched: string) => {
        const key = matched.replace(/%/g, '');
        return json[key] ? json[key] : matched;
      });
    } else {
      this.result = this.form.controls.inputText.value;
    }
    this.appFacade.setTextPreview(this.result);
  }

  fillTestData(): void {
    this.form.controls.inputText.setValue(this.testData.text);
    this.form.controls.inputJson.setValue(this.testData.json);
    this.onInput();
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
