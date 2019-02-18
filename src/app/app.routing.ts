import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { OngPageComponent } from './ong/ong-page/ong-page.component';

const appRoutes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'ong', component: OngPageComponent},



   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];


@NgModule({
    // useHash supports github.io demo page, remove in your app
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
