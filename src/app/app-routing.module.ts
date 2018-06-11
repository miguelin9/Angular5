import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarComponent } from './bar/bar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardGuard] },
  { path: 'bar', component: BarComponent, canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
