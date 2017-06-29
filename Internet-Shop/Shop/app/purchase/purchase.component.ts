import { Component, OnInit } from '@angular/core';
import { Car } from '../shared/car';
import { CartService } from '../shared/cart.service';

@Component({
    template: `
    <form #myForm="ngForm" novalidate>
        <div class="row">
            <div class="col-md-4">
                  <h4>Here you can make an order.</h4>
                  <br>
                  <div class="form-group">
                     <label class="col-md-6 control-label">Name: </label>
                     <div class="col-md-10">
                        <input class="form-control" name="Name" [(ngModel)]="Name" required />
                     </div>
                 </div>
                 <div class="form-group">
                    <label class="col-md-6 control-label">Address: </label>
                    <div class="col-md-10">
                        <p><textarea name="Address" class="form-control" [(ngModel)]="Address" required></textarea></p>
                    </div>
                 </div>
                 <div class="form-group">
                    <label class="col-md-6 control-label">Total price: </label>
                    <div class="col-md-10">
                        <p>{{sum}} $</p>
                    </div>
                    </div>
                <div class="form-group">
                    <div class="col-md-10">
                        <br>
                        <button [disabled]="myForm.invalid" [routerLink]="['/cars'] " (click)="order(Name, Address)" class="btn btn-primary btn-lg">Order</button>
                    </div>
                </div>
            </div>
        </div>
    </form>`,
    providers: [CartService]
})
export class PurchaseComponent implements OnInit {

    cart: Array<Car> = [];
    sum: number;

    constructor(private cartService: CartService) { }
    ngOnInit() {
        this.cartService.getCart().subscribe(res => {
            this.cart = res;
            this.sum = this.getSum();
        });
    }

    getSum(): number {
        let sum = 0;
        for (let c of this.cart) {
            sum = sum + c.Price;
        }
        return sum;
    }

    order(name: string, address: string) {
        const purchaseComponent = this;
        purchaseComponent.cartService.addToPurchase(name, address, function () {
            purchaseComponent.cartService.clearCart();
        });
    }

}