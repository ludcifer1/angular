import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() counting= new EventEmitter<number>();
  lastCount=0;

  constructor() { }

  ngOnInit() {}

  startCounting(){
    this.interval= setInterval(
      ()=>{
        this.counting.emit(this.lastCount+1);
        this.lastCount++;
      }
      ,1000);
  }

  stopCounting() {
    // stop interval
    clearInterval(this.interval);
  }
}
