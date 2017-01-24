import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Customer, CustomerService }  from './customer.service';

@Component({
	template: `
		<div class="app-content">

		<h2>Customer List</h2>
		<ul class="items">
		   <li *ngFor="let customer of customers | async"
		   [class.selected]="isSelected(customer)"
		   (click)="onSelect(customer)">
		   <span class="badge">{{ customer.id }}</span> {{ customer.name }}
		   </li>
		</ul>
		<button routerLink="/sidekicks">Go to sidekicks</button>
		<div>

	  <router-outlet></router-outlet>  


		`,
	providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {

	customers: Observable<Customer[]>;
	private selectedId: number;

	constructor(
	    private service: CustomerService,
	    private route: ActivatedRoute,
	    private router: Router
	) {}

	ngOnInit() {
	  this.customers = this.route.params
	    .switchMap((params: Params) => {
	      this.selectedId = +params['id'];
	      return this.service.getCustomers();
	    });
	}

	isSelected(customer: Customer) {
		return customer.id === this.selectedId;
	}

	onSelect(customer: Customer) {
		this.router.navigate(['/customers', customer.id]);
	}	

}