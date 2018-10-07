import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  noticias;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.noticias = [
        'Noticia 1',
        'Noticia 2',
        'Noticia 3'
      ]
    }, 2000);
  }
}
