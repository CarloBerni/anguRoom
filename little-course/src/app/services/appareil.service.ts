import { Subject } from "rxjs";

export class AppareilService {
  appareilSubject = new Subject<any[]>();

  private appareils = [
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

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(s => {
      return s.id === id;
    });
    return appareil;
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = "allumé";
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = "éteint";
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index: number) {
    this.appareils[index].status = "allumé";
    this.emitAppareilSubject();
  }

  switchOffOne(index: number) {
    this.appareils[index].status = "éteint";
    this.emitAppareilSubject();
  }
}
