import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { User } from "../models/user";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "applicaiton/json" })
};

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private getUsersUrl: string = "https://reqres.in/api/users";
  constructor(private http: HttpClient) {}

  // We have casted the observable into an array of type Card
  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.getUsersUrl);
  // }

  getUsers(): Observable<User[]> {
    return this.http.get(this.getUsersUrl).pipe(map(result => result["data"]));
  }
}
