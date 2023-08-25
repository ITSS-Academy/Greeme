import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemProjectService {
  constructor() {}

  getProductsData() {
    return [
      {
        name: 'John Doe',
        role: 'Manager',
        key: false,
      },
      {
        name: 'David Doe',
        role: 'Developer',
        key: false,
      },
      {
        name: 'Alan New',
        role: 'Creative Director',
        key: false,
      },
    ];
  }
  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}
