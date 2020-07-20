import { Component, OnInit } from '@angular/core';
import { collectableServices } from 'app/shared/collectable.service';
import { Collectable } from 'app/shared/collectable.model';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
collectable:Collectable[]=[];
onAddToCollection(item:Collectable){
this.collectableServices.addToCollection(item)
}
  constructor(private collectableServices: collectableServices) { }

  ngOnInit() {
 this.collectable = this.collectableServices.getCollectables();
  }

}
