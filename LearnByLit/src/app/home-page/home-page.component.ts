import { Component, OnInit } from "@angular/core";
import { OxfordDefinition } from "../models/definition";
import { OxfordService } from "../services/oxford.service";
import { GoodreadsService } from "../services/goodreads.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  constructor(private gr: GoodreadsService, private ox: OxfordService) {}

  ngOnInit() {}
}
