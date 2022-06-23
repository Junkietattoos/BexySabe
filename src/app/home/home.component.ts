import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('paypalRef', { static: true }) private paypalRef: ElementRef
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 1000) {
      this.big = true;
    } else if (this.innerWidth < 1000) {
      this.small = true;
      }

      console.log(window.paypal);
      window.paypal.Buttons(
        {
          style: {
            layout: 'horizontal',
            color: 'black'

          },
  
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '50',
                    currency_code: 'EUR'
                  }
                }
              ]
            });
          },
  
  
          onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
              alert('Zahlung Erfolgreich!');
            });
          },
  
          onError: error => {
            console.log(error);
          }
        }
      ).render(this.paypalRef.nativeElement)
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
