import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 1500
    );
  });

  appareils = [
    {
      name: 'rig Ethereum',
      status: 'éteint'
    },
    {
      name: 'rig Litecoin',
      status: 'allumé'
    },
    {
      name: 'rig Dash',
      status: 'éteint'
    },
    {
      name: 'rig Monero',
      status: 'éteint'
    }
  ];
 
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 1500);
  }
  onLightOn() {
    console.log("On allume tout !");
  }
}
