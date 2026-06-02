import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vocab-list',
  templateUrl: './vocab-list.component.html',
  styleUrls: ['./vocab-list.component.scss']
})
export class VocabListComponent {
  @Input() vocab: string[] = [];
}
