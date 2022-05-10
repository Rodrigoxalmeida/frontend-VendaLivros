import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cadastro } from 'src/app/models/cadastro';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {

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

  constructor(
    private service: CadastroService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cadastro.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cadastro.id).subscribe (resposta => {
      resposta.localVenda = [];
      this.cadastro = resposta;
    });
  }

  delete(): void {
    this.service.delete(this.cadastro.id).subscribe(() => {
      this.toast.success('Cadastrado excluído com sucesso!','Deletar');
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


}

