import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CardsComponent } from "./components/cards/cards.component";
import { MainComponent } from "./components/main/main.component";

import { UsersService } from "./services/users.service";

@NgModule({
  declarations: [AppComponent, CardsComponent, MainComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
