import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q-modal',
  templateUrl: 'q-modal.html',
})
export class QModalPage {
  question = {}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QModalPage');
  }

  createQuestion() {
    console.log(this.question);
    this.navCtrl.pop();
  }

}
