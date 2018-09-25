import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  count = 0;

  @Output()
  counting = new EventEmitter<{
    count: number;
  }>();

  constructor() {}

  ngOnInit() {}

  startCounting() {
    setInterval(function() {
      this.count += 1;
      // this.counting.emit({
      //   count: this.count
      // });
      console.log(this.count);
    }, 1000);
  }
  stopCounting() {
    // stop interval
  }
}
