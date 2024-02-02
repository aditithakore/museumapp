import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonItem,IonInput,IonButton,IonAlert } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonList,IonItem,IonInput,IonButton,IonAlert],
})
export class Tab3Page {
  alertButtons = ['Okay', 'go back'];
  constructor() {}
}
