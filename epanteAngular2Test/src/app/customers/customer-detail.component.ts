import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Customer, CustomerService }  from './customer.service';

@Component({
  template: `
  <h2>CUSTOMERS</h2>
  <div *ngIf="customer">
    <h3>"{{ customer.name }}"</h3>
    <div>
      <label>Id: </label>{{ customer.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="customer.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoCustomers()">Back</button>
    </p>
  </div>
  
  `
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CustomerService
  ) {}

	ngOnInit() {
		this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => this.service.getCustomer(+params['id']))
		.subscribe((customer: Customer) => this.customer = customer);
  	}

  gotoCustomers() {
		let customerId = this.customer ? this.customer.id : null;
	    // Pass along the customer id if available
	    // so that the CustomerList component can select that customer.
	    // Include a junk 'foo' property for fun.
		this.router.navigate(['/customers', { id: customerId, foo: 'foo' }]);
	}

}





