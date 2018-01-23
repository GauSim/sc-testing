import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EnsureAuthContextGuard } from './ensure-auth-context.guard';
import { Store } from '@ngrx/store';
import { State } from '../../index';
import { authContextReducer } from '../../authContext/authContext.reducer';

describe('EnsureAuthContextGuard', () => {
  let store: Store<State>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureAuthContextGuard],
      imports: [
        StoreModule.forRoot({ authContext: authContextReducer })
      ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

  });

  it('should mount', inject([EnsureAuthContextGuard], (guard: EnsureAuthContextGuard) => {
    expect(guard).toBeTruthy();
  }));

});
