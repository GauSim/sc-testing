import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeWhile';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { MatButtonModule, MatCardModule, MatGridListModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';

import { reducers, metaReducers } from './reducers';
import { CustomRouterStateSerializer } from './shared/utils';

import { EnsureAuthContextGuard } from './guards/ensure-auth-context.guard';
import { EnsureItemGuard } from './guards/ensure-item.guard';

import { ServiceCallEffects } from './state/serviceCall/serviceCall.effects';
import { AuthContextEffects } from './state/authContext/authContext.effects';

import { NotFoundComponent } from './features/not-found/not-found.component';
import { EditComponent } from './features/edit/edit.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { ServiceCallContainerComponent } from './features/service-call-container/service-call-container.component'
import { appRoutes } from './routing/routes';
import { IframeMessagingService } from './shared/iframeMessagingService';




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
    IframeMessagingService,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
