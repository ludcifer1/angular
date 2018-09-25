import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  // newServerName = "";
  // newServerContent = "";

  @ViewChild("serverContentInput") serverContentInput: ElementRef;

  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output()
  blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit() {}

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
