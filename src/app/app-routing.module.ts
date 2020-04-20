import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParserComponent } from './parser/parser.component';


const routes: Routes = [ {
  path: 'parser',
  component: ParserComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
