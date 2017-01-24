import { Injectable } from '@angular/core';

export class Customer {
  constructor(public id: number, public name: string) { }
}

let CUSTOMERS = [
  new Customer(11, 'Mr. Nice'),
  new Customer(12, 'Narco'),
  new Customer(13, 'Bombasto'),
  new Customer(14, 'Celeritas'),
  new Customer(15, 'Magneta'),
  new Customer(16, 'RubberMan')
];

let customersPromise = Promise.resolve(CUSTOMERS);

@Injectable()
export class CustomerService {
  getCustomers() { return customersPromise; }

  getCustomer(id: number | string) {
    return customersPromise
      .then(customers => customers.find(customer => customer.id === +id));
  }
}