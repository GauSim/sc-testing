import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CollectionEffects } from './effects/collection';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { MatButtonModule, MatCardModule, MatGridListModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';

import { reducers, metaReducers } from './reducers';
import { CustomRouterStateSerializer } from './shared/utils';
import { ServiceCallExistsGuard } from './guards/service-call-exists.guard';

import { NotFoundComponent } from './features/not-found/not-found.component';
import { EditComponent } from './features/edit/edit.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { ServiceCallContainerComponent } from './features/service-call-container/service-call-container.component'

const appRoutes: Routes = [
  { path: '', component: NotFoundComponent },
  { path: 'edit/:id', component: ServiceCallContainerComponent, canActivate: [ServiceCallExistsGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ServiceCallContainerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }  <-- debugging purposes only
    ),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      CollectionEffects
    ]),
    BrowserModule,
    BrowserAnimationsModule,

    StoreRouterConnectingModule,

    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule

  ],
  providers: [
    ServiceCallExistsGuard,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
