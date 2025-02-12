// header.component.ts
import { Component, OnInit } from '@angular/core';
import { CantidadCarritoService } from '../servicios/cantidad-carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;

  constructor(private cartCountService: CantidadCarritoService) { }

  ngOnInit(): void {
    this.cartCountService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}
