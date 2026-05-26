import { Component, OnInit } from '@angular/core';
import { HskService } from '../hsk.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hskList: any[] = [];
  selectedHsk: any = null;

  constructor(private hskService: HskService) { }

  ngOnInit() {
    this.hskService.getHskList().subscribe(data => {
      this.hskList = data;

      if (this.hskList.length > 0) {
        this.selectedHsk = this.hskList[0];
      }
    });
  }

  selectHsk(item: any) {
    this.selectedHsk = item;
  }
}