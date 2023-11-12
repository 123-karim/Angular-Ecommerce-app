import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()data:any={};
@Output() item = new EventEmitter();
bool:boolean=false;
amount:number=0
  getitem(){
    this.item.emit({pro:this.data,quantity:this.amount});
    this.bool=false;
  }
}
