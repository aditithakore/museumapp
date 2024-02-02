import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';


@Component({
  selector: 'app-clickme',
  templateUrl: './clickme.page.html',
  styleUrls: ['./clickme.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ClickmePage implements OnInit {

  constructor(private navCtrl: NavController) { 
    addIcons({arrowBack});
  }

  goBack(){
    this.navCtrl.back();
  }
  ngOnInit() {
  }

}
