import { Routes } from '@angular/router';
import { EnsureAuthContextGuard } from './guards/ensure-auth-context.guard';
import { EnsureItemGuard } from './guards/ensure-item.guard';
import { NotFoundComponent } from '../../containers/not-found/not-found.container';
import { ServiceCallContainerComponent } from '../../containers/service-call/service-call.container';

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
};
