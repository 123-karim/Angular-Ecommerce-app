import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServcartsService } from '../../service/servcarts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit ,OnChanges{
productcart:any[]=[];
cartdata:any[]=[]
bool:boolean=false;
constructor(private service:ServcartsService){}
  ngOnChanges(changes: SimpleChanges): void {
   this.bool=false;
  }
totale:any=0
  ngOnInit(): void {
    this.getcartproducts();

  }
getcartproducts(){
  if("cart"in localStorage)
  {
    this.productcart=JSON.parse(localStorage.getItem("cart")!);
    this.gettotaleprice();

  }
}
minsAmount(index:number){
  if(this.productcart[index].quantity>0)
  {
    this.productcart[index].quantity--;
    localStorage.setItem("cart",JSON.stringify (this.productcart))
    this.gettotaleprice();
  }


}
addAmount(index:number){
  this.productcart[index].quantity++;
  localStorage.setItem("cart",JSON.stringify (this.productcart));
  this.gettotaleprice();

}
detectchange(){
  localStorage.setItem("cart",JSON.stringify (this.productcart));

}
deletfromcart(index:number){
  this.productcart.splice(index,1);
  localStorage.setItem("cart",JSON.stringify (this.productcart));
  this.gettotaleprice();
}
clearcart(){
  this.productcart=[];
  localStorage.setItem("cart",JSON.stringify (this.productcart));
  this.gettotaleprice();

}
gettotaleprice(){
  this.totale=0;
  for(let x in this.productcart){
    this.totale+=this.productcart[x].pro.price*this.productcart[x].quantity;
  }
}

addcart(){
  this.cartdata=this.productcart.map(res=>{
    return{productId:res.pro.id,quantity:res.quantity}
  });
  let model={
    userId:12,
    date:new Date(),
    products:this.cartdata
  }
this.service.postcart(model).subscribe(res=>{
this.bool=true;

})

}
}
