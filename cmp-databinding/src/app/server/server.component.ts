yuuaududududuimport { Component, OnInit, Input, Output, } from "@angular/core";


@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  // --------------
  //  @Input() element: {
  //     type: string,
  //     name: string,
  //     content: string
  //   };
  @Input('srvElement')
  element: { type: string; name: string; content: string };


  constructor() {}

  ngOnInit() {}


}
