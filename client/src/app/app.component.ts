import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';

private items: MenuItem[];
private activeItem: MenuItem;

 ngOnInit() {
        this.items = [
            {label: 'Home', icon: 'fa-bar-chart'},
            {label: 'Product', icon: 'fa-calendar'},
            {label: 'Customer', icon: 'fa-book'},
            {label: 'Repair', icon: 'fa-support'},
            {label: 'Expense', icon: 'fa-twitter'},
            {label: 'Close Register', icon: 'fa-bar-chart'},
            {label: 'Sales History', icon: 'fa-calendar'},
            {label: 'User', icon: 'fa-book'},
            {label: 'Repair', icon: 'fa-support'}
        ];
        this.activeItem = this.items[2];
    }

}
