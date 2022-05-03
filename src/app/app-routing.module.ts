import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { CadastroListComponent } from './components/cadastro/cadastro-list/cadastro-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path:'',    component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'cadastrar' , component: CadastroListComponent},
      {path: 'cadastrar/create' , component: CadastroCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
