import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'PESOS';
  quiero = 'USD';
  total = 0;

  monedas: string[] = ['PESOS', 'USD', 'EUR', 'LIBRAS']

  constructor() { }

  ngOnInit(): void {
  }

  convertir() {
    switch(this.tengo) {
      case 'PESOS':
        if(this.quiero === 'PESOS') {
          this.total = this.cantidad;
        }  
        if(this.quiero === 'USD') {
          this.total = this.cantidad * 0.011
        }
        if(this.quiero === 'EUR') {
          this.total = this.cantidad * 0.84
        }
        if(this.quiero === 'LIBRAS') {
          this.total = this.cantidad * 0.72
        }
      break;
      case 'USD':
        if(this.quiero === 'PESOS') {
          this.total = this.cantidad;
        }
        if(this.quiero === 'USD') {
          this.total = this.cantidad * 92.34
        }
        if(this.quiero === 'EUR') {
          this.total = this.cantidad * 0.84
        }
        if(this.quiero === 'LIBRAS') {
          this.total = this.cantidad * 0.72
        }
      break;
      case 'EUR':
        if(this.quiero === 'PESOS') {
          this.total = this.cantidad * 109.71
        }
        if(this.quiero === 'USD') {
          this.total = this.cantidad * 1.19
        }
        if(this.quiero === 'EUR') {
          this.total = this.cantidad;
        }
        if(this.quiero === 'LIBRAS') {
          this.total = this.cantidad * 0.86
        }
      break;
      case 'LIBRAS':
        if(this.quiero === 'PESOS') {
          this.total = this.cantidad * 126.89
        }
        if(this.quiero === 'USD') {
          this.total = this.cantidad * 1.38
        }
        if(this.quiero === 'EUR') {
          this.total = this.cantidad * 1.16
        }
        if(this.quiero === 'LIBRAS') {
          this.total = this.cantidad;
        }
      break;
    }
  }

}
