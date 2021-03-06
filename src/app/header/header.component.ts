import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly translate: TranslateService, public router: Router) { }

  ngOnInit(): void {
  }


  useLanguage(language: string): void {
    this.translate.use(language);
}

}
