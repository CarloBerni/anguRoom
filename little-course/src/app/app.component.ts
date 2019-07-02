import { Component, OnInit } from "@angular/core";
import { AppareilService } from "./services/appareil.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 1500);
  });

  appareils: any[];

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    if (confirm("Etes-vous sûr de vouloir allumer tous vos appareils ?")) {
      this.appareilService.switchOnAll();
    } else {
      return null;
    }
  }
  onEteindre() {
    if (confirm("Etes-vous sûr de vouloir éteindre tous vos appareils ?")) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
}
