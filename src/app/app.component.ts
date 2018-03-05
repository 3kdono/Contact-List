import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Contactlist {
  fname: string;
  lname: string;
  phone: string;
  mobile: string;
  email: string;
  address: string;
}

interface ContactId extends Contactlist { 
  id: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  fname: string;
  lname: string;
  phone: string;
  mobile: string;
  email: string;
  address: string;
  contactCol: AngularFirestoreCollection<Contactlist>;
  contact: any;

  postDoc: AngularFirestoreDocument<Contactlist>;
  post: Observable<Contactlist>;

  constructor(private afs: AngularFirestore) {

  }
  
    ngOnInit() {
      this.contactCol = this.afs.collection('Contactlist');
      this.contact = this.contactCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Contactlist;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
    }

    addPost() {
      this.contactCol.add({'fname': this.fname, 'lname': this.lname, 'mobile': this.mobile, 'phone': this.phone, 'email': this.email, 'address': this.address});
    }
    
    getPost(postId) {
      this.postDoc = this.afs.doc('Contactlist/'+postId);
      this.post = this.postDoc.valueChanges();
    }

    deletePost(postId) {
      this.afs.doc('Contactlist/'+postId).delete();
    }
}

