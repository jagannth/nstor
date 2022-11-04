import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private db: AngularFireDatabase) { }

  GetItems(url:string) {
    var result = this.db.list(url).snapshotChanges();
    return result;
  }
  GetItemById(url:string, id:string) {
    var result = this.db.list(url+'/'+id);
    return result;
  }
  AddItem(url:string, item:any) {
    this.db.list(url).push(item).catch((error) => {
      console.log(error);
    });;
  }
  UpdateItem(url:string, id:string) {
    var result = this.db.list(url+'/'+id);
    return result;
  }
  DeleteItem(url:string, id:string) {
    var result = this.db.list(url+'/'+id);
    return result;
  }
}
