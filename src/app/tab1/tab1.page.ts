import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid ,  IonRow,IonCol,IonButton,IonSearchbar, IonSelect,IonList,IonSelectOption,IonItem,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonThumbnail,IonLabel, IonInfiniteScroll} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonGrid, IonRow,IonCol,IonButton,IonSearchbar, IonSelect,IonList,IonSelectOption,IonItem,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonThumbnail,IonLabel, IonInfiniteScroll],
})
export class Tab1Page {
  constructor() {}
}
