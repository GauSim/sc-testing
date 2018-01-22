import { Routes } from '@angular/router';
import { NotFoundComponent } from '../features/not-found/not-found.component';
import { ServiceCallContainerComponent } from '../features/service-call-container/service-call-container.component';
import { EnsureAuthContextGuard } from '../guards/ensure-auth-context.guard';
import { EnsureItemGuard } from '../guards/ensure-item.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: NotFoundComponent
  },
  {
    path: 'edit/:id',
    component: ServiceCallContainerComponent,
    canActivate: [EnsureAuthContextGuard, EnsureItemGuard]
  },
  {
    path: 'fragment/edit/:id',
    component: ServiceCallContainerComponent,
    canActivate: [EnsureAuthContextGuard, EnsureItemGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export {
  appRoutes
}
