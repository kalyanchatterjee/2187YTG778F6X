import { Component, OnInit, Input } from "@angular/core";

import { User } from "../../models/user";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  @Input() user: User;
  constructor() {}
  ngOnInit() {}
}
