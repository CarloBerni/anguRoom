export class AppareilService {
  appareils = [
    {
      name: "rig Ethereum",
      status: "éteint"
    },
    {
      name: "rig Litecoin",
      status: "allumé"
    },
    {
      name: "rig Dash",
      status: "éteint"
    },
    {
      name: "rig Monero",
      status: "éteint"
    }
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = "allumé";
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = "éteint";
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = "allumé";
  }

  switchOffOne(index: number) {
    this.appareils[index].status = "éteint";
  }

  

}
