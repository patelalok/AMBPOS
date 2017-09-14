import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  private products: any; 
  constructor() { }

  setProducts(obj: any): void{
    this.products = obj;
    localStorage.setItem('product', JSON.stringify(obj));
  }
  getProducts(): any{
    this.products = JSON.parse(localStorage.getItem('product'));
    return this.products
  }
  clearProducts(): void{
    localStorage.removeItem('product');
  }
}
