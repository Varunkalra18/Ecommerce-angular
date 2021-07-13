import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren:() =>
      import('./products/products.module').then((m) => m.ProductsModule)
  },
  {
    path:"admin",
    loadChildren:() =>
    import('./admin/admin.module').then((m) => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
