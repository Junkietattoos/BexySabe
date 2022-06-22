import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  innerWidth: any;
  small = false;
  big =  false;

  constructor(private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 1000) {
      this.big = true;
    } else if (this.innerWidth < 1000) {
      this.small = true;
      }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.innerWidth > 1000) {
      this.big = true;
    } else if (this.innerWidth < 999) {
      this.small = true;
      }
  }
}
