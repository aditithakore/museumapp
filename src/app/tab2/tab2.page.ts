import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonSearchbar, IonSelect, IonList, IonSelectOption, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonThumbnail, IonLabel, IonInfiniteScroll } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonGrid, IonRow, IonCol, IonButton, IonSearchbar, IonSelect, IonList, IonSelectOption, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonThumbnail, IonLabel, IonInfiniteScroll],
})
export class Tab2Page {

  constructor(private router: Router) { }

  onCardClick(cardTitle: string) {
    console.log(`Clicked on card: ${cardTitle}`);
    this.router.navigate(['/clickme']);

  }

}
