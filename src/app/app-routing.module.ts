import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  {path:'home', component: HomepageComponent},
  {path: 'repos', component: RepositoriesComponent},
  {path: '**', component: HomepageComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
