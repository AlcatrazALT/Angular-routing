import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{
  public id: number
  public product: string
  public price: string

  private routeSubscription: Subscription
  private querySubscription: Subscription

  constructor(private route: ActivatedRoute) {
    console.log(route)
    this.routeSubscription = route.params.subscribe(
      (params) => (this.id = params['id'])
    )
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.product = queryParam['product']
        this.price = queryParam['price']
      }
    )
  }
}
