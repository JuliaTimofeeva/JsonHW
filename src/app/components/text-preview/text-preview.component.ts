import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-preview',
  templateUrl: './text-preview.component.html',
  styleUrls: ['./text-preview.component.scss'],
})

export class TextPreviewComponent implements OnInit {
  @Input() text = '';
  constructor() {}

  ngOnInit(): void {
  }

}
