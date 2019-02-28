import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-chat',
  templateUrl: 'list-chat.html',
})
export class ListChatPage {

  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = ['user 1', 'user 2', 'user 3', 'user 4', 'user 5', 'user 6', 'user 7']
    console.log('item', this.item)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListChatPage');
  }

  roomChat(chat) {
    console.log('selected item', chat);
    this.navCtrl.push('ChatPage', { chat: chat });
  }

}
