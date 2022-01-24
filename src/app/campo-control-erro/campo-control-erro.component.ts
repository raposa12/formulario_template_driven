import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit {

  //input property para mostrar o erro e mensagem do erro caso nao prencher o campo
  @Input() mostrarErro: any;
  @Input() msgErro: any;

  constructor() { }

  ngOnInit(): void {
  }

}
