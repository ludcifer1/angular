import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onCounting(count: number) {
    if (count % 2 === 0) {
      this.evenNumbers.push(count);
    } else if (count % 2 !== 0) {
      this.oddNumbers.push(count);
    }
    console.log(this.evenNumbers);
  }
}
