import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isAuth = false;

  appareilOne = "rig Ethereum"
  appareilTwo = "rig Litecoin";
  appareilThree = "rig Dash";
  appareilFour = "rig Monero";


  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 2500);
  }
  onLightOn() {
    console.log("On allume tout !");
  }
}
