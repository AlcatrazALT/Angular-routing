import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item :Item = new Item()

  constructor(private router: Router) {}
  goHome() {
    this.router.navigate([''])
  }
  goToItem(myItem: Item) {
    this.router.navigate(['/item', myItem.id], {
      queryParams: {
        product: myItem.product,
        price: myItem.price,
      },
    })
  }
}

export class Item {
  id: number
  product: string
  price: number
}