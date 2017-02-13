import { Component, OnInit } from '@angular/core';
import {UsersService} from "./shared/users.service";
import {User} from "./shared/user";

/*
import { IMdlTableColumn } from 'angular2-mdl';
import { IMdlTableModelItem } from 'angular2-mdl';
import { MdlModule } from 'angular2-mdl';
import { MdlDefaultTableModel } from 'angular2-mdl';
*/

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => this.users = data);
  }

  deleteUser(user){
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.usersService.deleteUser(user.id)
        .subscribe(null,
          err => {
            alert("Could not delete user.");
            // Revert the view back to its original state
            this.users.splice(index, 0, user);
          });
    }
  }

}

/*
export interface ITableItem extends IMdlTableModelItem {
    material: string;
    quantity: number;
    unitPrice: number;
    selected: boolean;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export  class TableDemo implements OnInit {

  private tableData: [ITableItem] = [
    {material: 'Acrylic (Transparent)', quantity: 25, unitPrice: 2.90, selected: true},
    {material: 'Plywood (Birch)', quantity: 50, unitPrice: 1.25, selected: false},
    {material: 'Laminate (Gold on Blue)', quantity: 10, unitPrice: 2.35, selected: false}
  ];

  protected selected: Array<ITableItem> = new Array<ITableItem>();

  public tableModel = new MdlDefaultTableModel([
    {key: 'material', name: 'Material', sortable: true},
    {key: 'quantity', name: 'Quantity', sortable: true, numeric: true},
    {key: 'unitPrice', name: 'Unit price', numeric: true}
  ]);

  constructor() {  }

  public ngOnInit() {
    //super.ngOnInit();
    
    this.tableModel.addAll(this.tableData);
    this.selected = this.tableData.filter( data => data.selected);
  }

  protected selectionChanged($event) {
    this.selected = $event.value;
  }
}
*/