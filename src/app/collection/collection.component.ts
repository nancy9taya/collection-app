import { Component, OnInit } from '@angular/core';
import {Collectable} from "../shared/collectable.model"
import { collectableServices } from 'app/shared/collectable.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {
collectedItems:Collectable[]= [];

OnRemoveFromcCollection(item:Collectable){
  this.collectableServices.removeFromCollection(item);
}
  constructor(private collectableServices: collectableServices) { }

  ngOnInit() {
    this.collectedItems = this.collectableServices.getCollection();
  }

}
