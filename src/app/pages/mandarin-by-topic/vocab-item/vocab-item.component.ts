import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vocab-item',
  templateUrl: './vocab-item.component.html',
  styleUrls: ['./vocab-item.component.scss']
})
export class VocabItemComponent {
  @Input() word = '';
  @Input() translation = '';
}
