import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cadastro } from 'src/app/models/cadastro';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: Cadastro = {
    
    id: '',
    titulo: '',
    autor: '',
    codigo: '',
    preco: '',
    descricao: '',
    localVenda: [],
    dataVenda: '' 
  }

  titulo:     FormControl =  new FormControl(null, Validators.required);
  autor:      FormControl =  new FormControl(null, Validators.minLength(3));
  codigo:     FormControl =  new FormControl(null, Validators.required);
  preco:      FormControl =  new FormControl(null, Validators.required);
  descricao:  FormControl =  new FormControl(null, Validators.minLength(3));


  constructor(
    private service: CadastroService,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.cadastro).subscribe(() => {
      this.toast.success('Livro Cadastrado com sucesso!','Cadastro');
      this.router.navigate(['cadastrar'])
    },ex =>{
      if(ex.error.errors){
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      }else{
        this.toast.error(ex.error.message);
      }
    })
  }

  addLocalVenda(local: any): void {
    
    if(this.cadastro.localVenda.includes(local)){
      this.cadastro.localVenda.splice(this.cadastro.localVenda.indexOf(local),1);
    }else{
      this.cadastro.localVenda.push(local);
    }

  }

  validaCampos(): boolean{
    return this.titulo.valid && this.autor.valid && this.codigo.valid && this.preco.valid && this.descricao.valid;
  }

}
