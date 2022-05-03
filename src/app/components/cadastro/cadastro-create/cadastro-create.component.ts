import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  titulo:     FormControl =  new FormControl(null, Validators.required);
  autor:      FormControl =  new FormControl(null, Validators.minLength(3));
  codigo:     FormControl =  new FormControl(null, Validators.required);
  preco:      FormControl =  new FormControl(null, Validators.required);
  descricao:  FormControl =  new FormControl(null, Validators.minLength(3));


  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    return this.titulo.valid && this.autor.valid && this.codigo.valid && this.preco.valid && this.descricao.valid;
  }

}
