import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexPageComponent } from './pages/flex-page/flex-page.component';
import { GridPageComponent } from './pages/grid-page/grid-page.component';

const routes: Routes = [

  {
    path: 'flex-page',
    component: FlexPageComponent,
    data: {title: 'FlexPage'}
  },
  {
    path: 'grid-page',
    component: GridPageComponent,
    data: {title: 'GridPage'}
  },
  {
    path: '',
    redirectTo: '/flex-page',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
