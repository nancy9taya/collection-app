import {Collectable} from "./collectable.model"

export class collectableServices{
    private collectable=[
        {description:'a ver rare copy',type:'book'},
        {description:'a very smart peper',type:'paper'},
        {description:'a very nice photo',type:'photo'},
        {description:'a great pen',type:'pen'}
    ];
    private collection:Collectable[]= [];
        getCollectables(){
             return this.collectable;
        }
        getCollection(){
            return this.collection;
        }
        addToCollection(item:Collectable){
            if(this.collection.indexOf(item) !== -1){
                return ;
            }
            this.collection.push(item);
        }
        removeFromCollection(item:Collectable){
            this.collection.splice(this.collection.indexOf(item), 1)
        }
}