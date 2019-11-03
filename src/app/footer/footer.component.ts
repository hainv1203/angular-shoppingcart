import { Component, OnInit, Input, DoCheck } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html"
})
export class FooterComponent implements OnInit, DoCheck {
  @Input() totalMoney: number;

  constructor() {
    console.log("constructor cua FooterComponent");
  }
  ngOnInit() {
    console.log("OnInit cua FooterComponent");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit cua FooterComponent");
  }

  ngDoCheck() {
    console.log("DoCheck cua FooterComponent");
  }
}
