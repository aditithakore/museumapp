import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,IonToolbar, IonTitle,IonHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { happy,compass,informationCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,IonToolbar,IonTitle,IonHeader],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({  compass,happy,informationCircleOutline });
  }
}
