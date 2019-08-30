import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";

import { User } from "../../models/user";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  users: User[];
  loaded: boolean;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.loaded = false;
    setTimeout(() => {
      this.usersService.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
        console.log(this.users);
      });
    }, 2000);
  }
}
