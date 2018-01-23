import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/switchMap';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { MatButtonModule, MatCardModule, MatGridListModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';

import { reducers, metaReducers } from './state/index';

import { EnsureAuthContextGuard } from './state/router/guards/ensure-auth-context.guard';
import { EnsureItemGuard } from './state/router/guards/ensure-item.guard';

import { ServiceCallEffects } from './state/serviceCall/serviceCall.effects';
import { AuthContextEffects } from './state/authContext/authContext.effects';


import { EditComponent } from './components/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './containers/not-found/not-found.container';
import { ServiceCallComponent } from './containers/service-call/service-call.container'
import { appRoutes } from './state/router/routes';
import { CustomRouterStateSerializer } from './state/router/CustomRouterStateSerializer';
import { AuthContextIframeService } from './state/authContext/AuthContextIframeService';




@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ServiceCallComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }  <-- debugging purposes only
    ),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      ServiceCallEffects,
      AuthContextEffects
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
    EnsureItemGuard,
    EnsureAuthContextGuard,
    AuthContextIframeService,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
