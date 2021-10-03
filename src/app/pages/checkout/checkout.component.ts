import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from 'src/app/shared/interfaces/store.interfaces';
import { DataService } from 'src/app/shared/services/data.services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  model= {
    name: '',
    store: '',
    shippingAddress: '',
    city: ''
  };
  isDelivery!: boolean;

  stores: Store[] = []
  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.getStore();
  }

  onPickupOrDelivery(value:boolean):void{
    console.log(value);
  }
  onSubmit():void{
    console.log('Guardar');
  }
  getStore():void{
    this.dataSvc.getStore()
    .pipe(
      tap((stores:Store[]) => this.stores = stores))
    .subscribe()
  }

}
