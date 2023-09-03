import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor() {}

  getProductsData() {
    return [
      {
        name: 'Mr.Huan',
        role: 'team leader',
        key: false,
        avatar: 'assets/images/avatars/1.png',
      },
      {
        name: 'Minhhu',
        role: 'Developer',
        key: false,
        avatar: 'assets/images/avatars/1.png',
      },
      {
        name: 'Wind',
        role: 'Developer',
        key: false,
        avatar: 'assets/images/avatars/1.png',
      },
      {
        name: 'Liam',
        role: 'Developer',
        key: false,
        avatar: 'assets/images/avatars/1.png',
      },
      {
        name: 'Bong',
        role: 'Security',
        key: false,
        avatar: 'assets/images/avatars/1.png',
      },
      {
        name: 'GodBong',
        role: 'god',
        key: false,
        avatar: 'assets/images/avatars/1.png',
      },
      {
        name: 'John Doe',
        role: 'Manager',
        key: false,
        avatar: 'assets/images/avatars/1.png',
      },
      {
        name: 'David Doe',
        role: 'Developer',
        key: false,
        avatar: 'assets/images/avatars/1.png',
      },
      {
        name: 'Alan New',
        role: 'Creative Director',
        key: false,
        avatar: 'assets/images/avatars/1.png',
      },
    ];
  }
  async getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}
