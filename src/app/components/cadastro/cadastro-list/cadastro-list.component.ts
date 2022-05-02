import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cadastro } from 'src/app/models/cadastro';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.css']
})
export class CadastroListComponent implements OnInit {
  
  ELEMENT_DATA: Cadastro[] = [];

  displayedColumns: string[] = ['id', 'titulo', 'autor', 'codigo', 'preco', 'descricao', 'localVenda','dataVenda', 'acoes'];
  dataSource = new MatTableDataSource<Cadastro>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private service: CadastroService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Cadastro>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


