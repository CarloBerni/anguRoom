export class AppareilService {
  appareils = [
    {
      id: 1,
      name: "rig Ethereum",
      status: "éteint"
    },
    {
      id: 2,
      name: "rig Litecoin",
      status: "allumé"
    },
    {
      id: 3,
      name: "rig Dash",
      status: "éteint"
    },
    {
      id: 4,
      name: "rig Monero",
      status: "éteint"
    }
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
  
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
