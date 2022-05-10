import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { CadastroDeleteComponent } from './components/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroListComponent } from './components/cadastro/cadastro-list/cadastro-list.component';
import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path:'',    component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'cadastrar' , component: CadastroListComponent},
      {path: 'cadastrar/create' , component: CadastroCreateComponent},
      {path: 'cadastrar/update/:id' , component: CadastroUpdateComponent},
      {path: 'cadastrar/delete/:id' , component: CadastroDeleteComponent},
      {path: 'contato', component: ContatoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
