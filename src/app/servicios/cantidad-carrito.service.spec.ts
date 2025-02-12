import { TestBed } from '@angular/core/testing';

import { CantidadCarritoService } from './cantidad-carrito.service';

describe('CantidadCarritoService', () => {
  let service: CantidadCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantidadCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
