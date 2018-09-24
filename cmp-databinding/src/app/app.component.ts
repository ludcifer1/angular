import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "Test Server 1", content: "Just a test" },
    { type: "server", name: "Test Server 2", content: "Just a test" },
    { type: "server", name: "Test Server 3", content: "Just a test" }
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
