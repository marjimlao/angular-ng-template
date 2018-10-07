import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.component.html',
  styleUrls: ['./mi-lista.component.css']
})
export class MiListaComponent implements OnInit {

  @Input('items') items: Array<any>;
  @Input('itemTemplate') itemTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
