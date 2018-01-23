import './utilities/rxjs-imports';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './utilities/material.module';


import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

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
import { ServiceCallContainer } from './containers/service-call/service-call.container'
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
    ServiceCallContainer
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

    MaterialModule.forRoot(),

    BrowserModule,

    BrowserAnimationsModule,

    StoreRouterConnectingModule,

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
