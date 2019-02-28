import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;

  message;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // setTimeout(() => {
    //   this.content.scrollToBottom(300);//300ms animation speed
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  ionViewDidEnter(){
    this.content.scrollToBottom(200);
  }

  sendMessage(){
    console.log('message', this.message)
  }

}
