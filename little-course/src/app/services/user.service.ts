import { user } from "../models/User.model";
import { Subject } from "rxjs/Subject";

export class UserService {
  private users: user[] = [
    {
      firstName: "Carlo",
      lastName: "Berni",
      email: "carlo@Berni.com",
      drinkPreference: "Ice-tea",
      hobbies: ["coder", "MMORPG"]
    }
  ];
  userSubject = new Subject<user[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: user) {
    this.users.push(user);
    this.emitUsers();
  }
}
