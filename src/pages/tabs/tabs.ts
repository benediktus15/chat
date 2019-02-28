import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  listChatRoot = 'ListChatPage'
  contactRoot = 'ContactPage'


  constructor(public navCtrl: NavController) {}

}
